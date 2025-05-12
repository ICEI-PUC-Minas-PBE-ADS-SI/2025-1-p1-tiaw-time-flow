const conteudo = document.getElementById("conteudo-principal");
const btnDiario = document.getElementById("tab-diario");
const btnSemanal = document.getElementById("tab-semanal");

let tarefasPorData = {};
let dataSelecionada = new Date();

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

// PERSISTÊNCIA: carrega do localStorage ao iniciar
function carregarTarefas() {
  const salvas = localStorage.getItem("tarefasPorData");
  if (salvas) {
    tarefasPorData = JSON.parse(salvas);
  }
}

// PERSISTÊNCIA: salva no localStorage após alterações
function salvarTarefas() {
  localStorage.setItem("tarefasPorData", JSON.stringify(tarefasPorData));
}

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

function nomeCompletoDiaSemana(data) {
  const nomes = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  return nomes[data.getDay()];
}

function renderDiario() {
  const hoje = new Date();
  const chave = formatarData(hoje);
  const tarefas = tarefasPorData[chave] || [];
  const nomeDia = nomeCompletoDiaSemana(hoje);
  const dataExtenso = formatarDataExtenso(hoje);

  conteudo.innerHTML = `
    <h3>${nomeDia}, ${dataExtenso}</h3>
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
  inicioSemana.setHours(0, 0, 0, 0);

  for (let i = 0; i < 7; i++) {
    const data = new Date(inicioSemana.getTime() + i * 24 * 60 * 60 * 1000);
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

  const dataCorrigida = new Date(dataSelecionada.getFullYear(), dataSelecionada.getMonth(), dataSelecionada.getDate());
  const chaveSelecionada = formatarData(dataCorrigida);
  const tarefas = tarefasPorData[chaveSelecionada] || [];
  const nomeDia = nomeCompletoDiaSemana(dataCorrigida);
  const dataExtenso = formatarDataExtenso(dataCorrigida);

  conteudo.innerHTML = `
    <div class="semana">${semana.join("")}</div>
    <div class="semana-conteudo">
      <h3>${nomeDia}, ${dataExtenso}</h3>
      <div class="tarefas">
        ${tarefas.length === 0 ? '<p>Nenhuma tarefa para este dia.</p>' : tarefas.map((t, i) => `
          <div class="tarefa">
            <label>
              <input type="checkbox" onchange="marcarFeita('${chaveSelecionada}', ${i})" ${t.feita ? "checked" : ""}>
              <strong>${t.hora}</strong> ${t.descricao}
            </label>
            <button class="delete-btn" onclick="excluirTarefa('${chaveSelecionada}', ${i})">🗑️</button>
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
  const partes = dataStr.split("-");
  dataSelecionada = new Date(parseInt(partes[0]), parseInt(partes[1]) - 1, parseInt(partes[2]));
  renderSemanal();
}

function adicionarTarefaSemanal() {
  const hora = prompt("Digite o horário (ex: 14:00):");
  const descricao = prompt("Digite a descrição da tarefa:");
  const chave = formatarData(dataSelecionada);

  if (hora && descricao) {
    if (!tarefasPorData[chave]) tarefasPorData[chave] = [];
    tarefasPorData[chave].push({ hora, descricao, feita: false });
    salvarTarefas(); // SALVA APÓS ADICIONAR
    renderSemanal();
  }
}

function marcarFeita(chave, i) {
  tarefasPorData[chave][i].feita = !tarefasPorData[chave][i].feita;
  salvarTarefas(); // SALVA APÓS ALTERAÇÃO
  if (btnDiario.classList.contains("active")) renderDiario();
  else renderSemanal();
}

function excluirTarefa(chave, i) {
  tarefasPorData[chave].splice(i, 1);
  salvarTarefas(); // SALVA APÓS EXCLUSÃO
  if (btnDiario.classList.contains("active")) renderDiario();
  else renderSemanal();
}

// Carrega as tarefas salvas e inicia com o modo diário
carregarTarefas();
renderDiario();