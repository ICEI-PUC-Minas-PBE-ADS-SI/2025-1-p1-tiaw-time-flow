const conteudo = document.getElementById("conteudo-principal");
const btnDiario = document.getElementById("tab-diario");
const btnSemanal = document.getElementById("tab-semanal");

let tarefasPorData = {};
let dataSelecionada = new Date();

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

btnDiario.onclick = () => {
  btnDiario.classList.add("active");
  btnSemanal.classList.remove("active");
  dataSelecionada = new Date();
  renderDiario();
};

btnSemanal.onclick = () => {
  btnSemanal.classList.add("active");
  btnDiario.classList.remove("active");
  dataSelecionada = new Date(); 
  renderSemanal();
};

function formatarData(data) {
  return data.toISOString().split("T")[0];
}

function formatarDataExtenso(data) {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = data.toLocaleString('pt-BR', { month: 'long' });
  return `${dia} de ${mes}`;
}

function renderDiario() {
  const chave = formatarData(new Date()); 
  const tarefas = tarefasPorData[chave] || [];
  const nomeDia = diasSemana[new Date().getDay()];
  const dataExtenso = formatarDataExtenso(new Date());

  conteudo.innerHTML = `
    <h3>${nomeDia}-feira ${dataExtenso}</h3>
    <h2>Lista de Tarefas</h2>
    <div class="tarefas">
      ${tarefas.length === 0 ? '<p>Nenhuma tarefa adicionada.</p>' : tarefas.map((t, i) => `
        <div class="tarefa">
          <label>
            <input type="checkbox" onchange="marcarFeita('${chave}', ${i})" ${t.feita ? "checked" : ""}>
            <strong>${t.hora}</strong> ${t.descricao}
          </label>
          <button class="delete-btn" onclick="excluirTarefa('${chave}', ${i})">🗑️</button>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSemanal() {
  const semana = [];
  const hoje = new Date();
  const inicioSemana = new Date(hoje);
  inicioSemana.setDate(hoje.getDate() - hoje.getDay());

  for (let i = 0; i < 7; i++) {
    const data = new Date(inicioSemana);
    data.setDate(inicioSemana.getDate() + i);
    const dataStr = formatarData(data);
    const diaNum = String(data.getDate()).padStart(2, '0');
    const diaSemana = diasSemana[data.getDay()];
    const destaque = dataStr === formatarData(dataSelecionada) ? 'selecionado' : '';

    semana.push(`
      <div class="dia-semana ${destaque}" onclick="selecionarDiaSemanal('${dataStr}')">
        <div>${diaSemana}</div>
        <div>${diaNum}</div>
      </div>
    `);
  }

  const tarefas = tarefasPorData[formatarData(dataSelecionada)] || [];

  conteudo.innerHTML = `
    <div class="semana">${semana.join("")}</div>
    <div class="semana-conteudo">
      <h3>${formatarDataExtenso(dataSelecionada)}</h3>
      <div class="tarefas">
        ${tarefas.length === 0 ? '<p>Nenhuma tarefa para este dia.</p>' : tarefas.map((t, i) => `
          <div class="tarefa">
            <label>
              <input type="checkbox" onchange="marcarFeita('${formatarData(dataSelecionada)}', ${i})" ${t.feita ? "checked" : ""}>
              <strong>${t.hora}</strong> ${t.descricao}
            </label>
            <button class="delete-btn" onclick="excluirTarefa('${formatarData(dataSelecionada)}', ${i})">🗑️</button>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="sem-tarefa" onclick="adicionarTarefaSemanal()">
      <div class="adicionar">
        <span class="icone">+</span>
        <p>Adicionar tarefas à essa semana!</p>
      </div>
    </div>
  `;
}

function selecionarDiaSemanal(dataStr) {
  dataSelecionada = new Date(dataStr);
  renderSemanal(); 
}

function adicionarTarefaSemanal() {
  const hora = prompt("Digite o horário (ex: 14:00):");
  const descricao = prompt("Digite a descrição da tarefa:");
  const chave = formatarData(dataSelecionada);

  if (hora && descricao) {
    if (!tarefasPorData[chave]) tarefasPorData[chave] = [];
    tarefasPorData[chave].push({ hora, descricao, feita: false });
    renderSemanal();
  }
}

function marcarFeita(chave, i) {
  tarefasPorData[chave][i].feita = !tarefasPorData[chave][i].feita;
  if (btnDiario.classList.contains("active")) renderDiario();
  else renderSemanal();
}

function excluirTarefa(chave, i) {
  tarefasPorData[chave].splice(i, 1);
  if (btnDiario.classList.contains("active")) renderDiario();
  else renderSemanal();
}

// Carrega modo diário por padrão
renderDiario();
