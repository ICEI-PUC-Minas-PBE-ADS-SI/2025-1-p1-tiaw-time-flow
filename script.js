const conteudo = document.getElementById("conteudo-principal");
let tarefasPorData = {};
let dataSelecionada = new Date();
dataSelecionada.setHours(0, 0, 0, 0);

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

function carregarTarefas() {
  const salvas = localStorage.getItem("tarefasPorData");
  if (salvas) tarefasPorData = JSON.parse(salvas);
}

function salvarTarefas() {
  localStorage.setItem("tarefasPorData", JSON.stringify(tarefasPorData));
}

function mudarAba(index) {
  const slider = document.getElementById("slider");
  const buttons = document.querySelectorAll(".tab-button");

  slider.style.transform = `translateX(${index * 100}%)`;

  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  dataSelecionada = new Date();
  dataSelecionada.setHours(0, 0, 0, 0);

  if (index === 0) renderDiario();
  else renderSemanal();
}

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
  const hoje = new Date(dataSelecionada);
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
    <div class="sem-tarefa" onclick="adicionarTarefaDiaria()">
      <div class="adicionar">
        <span class="icone">+</span>
        <p>Adicionar tarefa para hoje!</p>
      </div>
    </div>
  `;
}

function renderSemanal() {
  const semana = [];
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const inicioSemana = new Date(hoje);
  inicioSemana.setDate(hoje.getDate() - hoje.getDay());

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

  const chaveSelecionada = formatarData(dataSelecionada);
  const tarefas = tarefasPorData[chaveSelecionada] || [];
  const nomeDia = nomeCompletoDiaSemana(dataSelecionada);
  const dataExtenso = formatarDataExtenso(dataSelecionada);

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
  dataSelecionada.setHours(0, 0, 0, 0);
  renderSemanal();
}

function adicionarTarefaSemanal() {
  const hora = prompt("Digite o horário (ex: 14:00):");
  const descricao = prompt("Digite a descrição da tarefa:");
  const chave = formatarData(dataSelecionada);

  if (hora && descricao) {
    if (!tarefasPorData[chave]) tarefasPorData[chave] = [];
    tarefasPorData[chave].push({ hora, descricao, feita: false });
    salvarTarefas();
    renderSemanal();
  }
}

function adicionarTarefaDiaria() {
  const hora = prompt("Digite o horário (ex: 14:00):");
  const descricao = prompt("Digite a descrição da tarefa:");
  const chave = formatarData(dataSelecionada);

  if (hora && descricao) {
    if (!tarefasPorData[chave]) tarefasPorData[chave] = [];
    tarefasPorData[chave].push({ hora, descricao, feita: false });
    salvarTarefas();
    renderDiario();
  }
}

function marcarFeita(chave, i) {
  tarefasPorData[chave][i].feita = !tarefasPorData[chave][i].feita;
  salvarTarefas();
  const btnDiario = document.getElementById("tab-diario");
  if (btnDiario.classList.contains("active")) renderDiario();
  else renderSemanal();
}

function excluirTarefa(chave, i) {
  tarefasPorData[chave].splice(i, 1);
  salvarTarefas();
  const btnDiario = document.getElementById("tab-diario");
  if (btnDiario.classList.contains("active")) renderDiario();
  else renderSemanal();
}

carregarTarefas();
renderDiario();


