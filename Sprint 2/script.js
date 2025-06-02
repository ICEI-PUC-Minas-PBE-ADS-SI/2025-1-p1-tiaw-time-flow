const metas = [
  { nome: "Academia", concluido: 1, total: 3 },
  { nome: "Tarefas de casa", concluido: 2, total: 3 },
  { nome: "Leitura", concluido: 3, total: 3 }
];

function renderMetas() {
  const container = document.getElementById("goalsContainer");
  container.innerHTML = "";

  metas.forEach((meta, index) => {
    const isConcluido = meta.concluido === meta.total;
    const goal = document.createElement("div");
    goal.className = "goal-card";
    goal.innerHTML = `
      <span>${meta.nome}</span>
      <div>
        <strong class="${isConcluido ? 'green' : ''}">${meta.concluido}/${meta.total}</strong>
        <span class="edit" onclick="editar(${index})">Editar</span>
      </div>
    `;
    container.appendChild(goal);
  });
}

function voltar() {
  alert("Voltando à tela anterior...");
}

function perfil() {
  alert("Abrindo perfil...");
}

function cronometro() {
  alert("Abrindo cronômetro...");
}

function adicionar() {
  const nome = prompt("Digite o nome da nova meta:");
  if (!nome) return;

  const concluido = parseInt(prompt("Quantas tarefas foram concluídas?"), 10);
  const total = parseInt(prompt("Qual o total de tarefas?"), 10);

  if (isNaN(concluido) || isNaN(total) || total < 1) {
    alert("Valores inválidos.");
    return;
  }

  metas.push({ nome, concluido, total });
  renderMetas();
}

function editar(index) {
  const novaMeta = { ...metas[index] };

  const novoNome = prompt("Editar nome da meta:", novaMeta.nome);
  if (novoNome !== null) novaMeta.nome = novoNome;

  const novoConcluido = prompt("Quantas tarefas foram concluídas?", novaMeta.concluido);
  const novoTotal = prompt("Qual o total de tarefas?", novaMeta.total);

  const c = parseInt(novoConcluido, 10);
  const t = parseInt(novoTotal, 10);

  if (!isNaN(c) && !isNaN(t) && t > 0) {
    novaMeta.concluido = c;
    novaMeta.total = t;
    metas[index] = novaMeta;
    renderMetas();
  } else {
    alert("Valores inválidos.");
  }
}


renderMetas();
