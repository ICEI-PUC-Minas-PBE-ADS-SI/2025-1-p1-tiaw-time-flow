const usuario = JSON.parse(sessionStorage.getItem("usuarioLogado"))
if (!usuario || !usuario.email) {
  alert("Usuário não logado.")
  window.location.href = "login.html"
}

const chaveMetas = `metas_${usuario.email}`
const metas = JSON.parse(localStorage.getItem(chaveMetas)) || []
let editandoIndex = -1 
const modalOverlay = document.getElementById("modalOverlay")
const modalTitle = document.getElementById("modalTitle")
const metaForm = document.getElementById("metaForm")
const nomeMeta = document.getElementById("nomeMeta")
const concluido = document.getElementById("concluido")
const total = document.getElementById("total")
const categoria = document.getElementById("categoria")

function salvarMetas() {
  localStorage.setItem(chaveMetas, JSON.stringify(metas))
}

function renderMetas() {
  const container = document.getElementById("goalsContainer")
  container.innerHTML = ""

  metas.forEach((meta, index) => {
    const isConcluido = meta.concluido === meta.total
    const porcentagem = Math.round((meta.concluido / meta.total) * 100)

    const goal = document.createElement("div")
    goal.className = `goal-card fade-in-up ${isConcluido ? "completed" : ""}`

    const categoriaEmoji = {
      pessoal: "🎯",
      trabalho: "💼",
      saude: "💚",
      fitness: "💪",
      estudo: "📚",
      hobby: "🎨",
    }

    goal.innerHTML = `
      <div class="goal-content">
        <div class="goal-category">
          ${categoriaEmoji[meta.categoria] || "🎯"} ${meta.categoria || "Pessoal"}
        </div>
        <h3 class="goal-title" title="${meta.nome}">${meta.nome}</h3>
        <p class="goal-progress-text">${porcentagem}% concluído</p>
      </div>
      <div class="goal-actions">
        <strong class="${isConcluido ? "green" : ""}">${meta.concluido}/${meta.total}</strong>
        <button class="mais-btn" onclick="incrementarConcluido(${index})" ${isConcluido ? "disabled" : ""}>＋</button>
        <button class="editar-btn" onclick="editarMeta(${index})">✏️</button>
        <button class="excluir-btn" onclick="excluirMeta(${index})">🗑️</button>
      </div>
    `

    container.appendChild(goal)
  })
}

function abrirModal() {
  editandoIndex = -1
  modalTitle.textContent = "Nova Meta"
  limparFormulario()
  modalOverlay.classList.add("active")
  nomeMeta.focus()
}

function editarMeta(index) {
  editandoIndex = index
  modalTitle.textContent = "Editar Meta"

  const meta = metas[index]
  nomeMeta.value = meta.nome
  concluido.value = meta.concluido
  total.value = meta.total
  categoria.value = meta.categoria || "pessoal"

  modalOverlay.classList.add("active")
  nomeMeta.focus()
}

function fecharModal() {
  modalOverlay.classList.remove("active")
  limparFormulario()
  editandoIndex = -1
}

function limparFormulario() {
  nomeMeta.value = ""
  concluido.value = "0"
  total.value = "1"
  categoria.value = "pessoal"
}

metaForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = nomeMeta.value.trim()
  const concluidoVal = Number.parseInt(concluido.value, 10)
  const totalVal = Number.parseInt(total.value, 10)
  const categoriaVal = categoria.value

  if (!nome) {
    alert("Por favor, digite o nome da meta.")
    nomeMeta.focus()
    return
  }

  if (isNaN(concluidoVal) || isNaN(totalVal) || totalVal < 1 || concluidoVal > totalVal || concluidoVal < 0) {
    alert("Por favor, verifique os valores de progresso.")
    return
  }

  const novaMeta = {
    nome: nome,
    concluido: concluidoVal,
    total: totalVal,
    categoria: categoriaVal,
  }

  if (editandoIndex >= 0) {
    metas[editandoIndex] = novaMeta
  } else {
    metas.push(novaMeta)
  }

  salvarMetas()
  renderMetas()
  fecharModal()
})

function incrementarConcluido(index) {
  if (metas[index].concluido < metas[index].total) {
    metas[index].concluido++
    salvarMetas()
    renderMetas()
  }
}

function excluirMeta(index) {
  const confirmacao = confirm(`Deseja realmente excluir a meta "${metas[index].nome}"?`)
  if (confirmacao) {
    metas.splice(index, 1)
    salvarMetas()
    renderMetas()
  }
}

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    fecharModal()
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    fecharModal()
  }
})

renderMetas()
