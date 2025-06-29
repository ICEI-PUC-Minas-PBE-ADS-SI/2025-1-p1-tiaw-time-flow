const conteudo = document.getElementById("conteudo-principal")
let tarefasPorData = {}
let dataSelecionada = new Date()
dataSelecionada.setHours(0, 0, 0, 0)
const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

let currentEditingTask = null
let currentEditingKey = null
let currentEditingIndex = null

let currentCarouselIndex = 0

function carregarTarefas() {
  const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"))
  if (!usuarioLogado) return
  const chaveUsuario = `tarefas_${usuarioLogado.email}`
  const salvas = localStorage.getItem(chaveUsuario)
  if (salvas) tarefasPorData = JSON.parse(salvas)
}

function salvarTarefas() {
  const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"))
  if (!usuarioLogado) return
  const chaveUsuario = `tarefas_${usuarioLogado.email}`
  localStorage.setItem(chaveUsuario, JSON.stringify(tarefasPorData))
}

function toggleFavorito(chave, index) {
  if (!tarefasPorData[chave] || !tarefasPorData[chave][index]) return

  tarefasPorData[chave][index].favorito = !tarefasPorData[chave][index].favorito
  salvarTarefas()

  const isDaily = document.getElementById("tab-diario").classList.contains("active")
  if (isDaily) {
    renderDiario()
  } else {
    renderSemanal()
  }
  renderCarrossel()
}

function obterTarefasFavoritas() {
  const favoritas = []

  Object.entries(tarefasPorData).forEach(([data, tarefas]) => {
    tarefas.forEach((tarefa, index) => {
      if (tarefa.favorito) {
        favoritas.push({
          ...tarefa,
          data: data,
          index: index,
          dataFormatada: formatarDataExtenso(new Date(data)),
        })
      }
    })
  })

  favoritas.sort((a, b) => new Date(a.data) - new Date(b.data))

  return favoritas
}

function renderCarrossel() {
  const carousel = document.getElementById("priority-carousel")
  const track = document.getElementById("carousel-track")
  const indicators = document.getElementById("carousel-indicators")
  const prevBtn = document.getElementById("carousel-prev")
  const nextBtn = document.getElementById("carousel-next")

  const favoritas = obterTarefasFavoritas()

  if (favoritas.length === 0) {
    carousel.classList.add("hidden")
    return
  }

  carousel.classList.remove("hidden")

  track.innerHTML = favoritas
    .map(
      (tarefa, index) => `
    <div class="priority-card" data-index="${index}">
      <div class="priority-card-header">
        <div class="priority-card-time">${tarefa.horaInicio} – ${tarefa.horaFim}</div>
        <button class="priority-card-favorite active" onclick="toggleFavorito('${tarefa.data}', ${tarefa.index})">
          ⭐
        </button>
      </div>
      <h4 class="priority-card-title">${tarefa.descricao}</h4>
      <div class="priority-card-date">${tarefa.dataFormatada}</div>
      <div class="priority-card-status ${tarefa.feita ? "completed" : ""}">
        <input type="checkbox" class="priority-card-checkbox" ${tarefa.feita ? "checked" : ""} 
               onchange="toggleTarefaFeita('${tarefa.data}', ${tarefa.index})">
        <span>${tarefa.feita ? "Concluída" : "Pendente"}</span>
      </div>
    </div>
  `,
    )
    .join("")

  if (favoritas.length > 1) {
    indicators.innerHTML = favoritas
      .map(
        (_, index) =>
          `<div class="carousel-indicator ${index === currentCarouselIndex ? "active" : ""}" 
            onclick="goToCarouselSlide(${index})"></div>`,
      )
      .join("")
  } else {
    indicators.innerHTML = ""
  }

  prevBtn.disabled = currentCarouselIndex === 0
  nextBtn.disabled = currentCarouselIndex >= favoritas.length - 1

  const cardWidth = 295 
  track.scrollLeft = currentCarouselIndex * cardWidth
}

function toggleTarefaFeita(chave, index) {
  if (!tarefasPorData[chave] || !tarefasPorData[chave][index]) return

  tarefasPorData[chave][index].feita = !tarefasPorData[chave][index].feita
  salvarTarefas()

  const isDaily = document.getElementById("tab-diario").classList.contains("active")
  if (isDaily) {
    renderDiario()
  } else {
    renderSemanal()
  }
  renderCarrossel()
}

function goToCarouselSlide(index) {
  const favoritas = obterTarefasFavoritas()
  if (index < 0 || index >= favoritas.length) return

  currentCarouselIndex = index
  renderCarrossel()
}

function nextCarouselSlide() {
  const favoritas = obterTarefasFavoritas()
  if (currentCarouselIndex < favoritas.length - 1) {
    currentCarouselIndex++
    renderCarrossel()
  }
}

function prevCarouselSlide() {
  if (currentCarouselIndex > 0) {
    currentCarouselIndex--
    renderCarrossel()
  }
}

document.getElementById("carousel-next").addEventListener("click", nextCarouselSlide)
document.getElementById("carousel-prev").addEventListener("click", prevCarouselSlide)

function mudarAba(index) {
  const slider = document.getElementById("slider")
  const buttons = document.querySelectorAll(".tab-button")
  slider.style.transform = `translateX(${index * 100}%)`
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index)
  })
  dataSelecionada = new Date()
  dataSelecionada.setHours(0, 0, 0, 0)
  if (index === 0) renderDiario()
  else renderSemanal()
}

function formatarData(data) {
  return data.toISOString().split("T")[0] 
}

function formatarDataExtenso(data) {
  const dia = String(data.getDate()).padStart(2, "0")
  const mes = data.toLocaleString("pt-BR", { month: "long" })
  return `${dia} de ${mes}`
}

function nomeCompletoDiaSemana(data) {
  const nomes = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
  return nomes[data.getDay()]
}

function converterParaMinutos(horaStr) {
  const [h, m] = horaStr.split(":").map(Number)
  return h * 60 + m
}

function duracaoEmMinutos(inicio, fim) {
  let diff = converterParaMinutos(fim) - converterParaMinutos(inicio)
  if (diff < 0) diff += 24 * 60 
  return diff
}

function getInicioSemana(dataBase) {
  const d = new Date(dataBase)
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - d.getDay()) 
  return d
}


const paleta = ["#00e0d6", "#007bff", "#1a00cc", "#f39c12", "#e74c3c", "#9b59b6", "#2ecc71", "#ff66ff", "#ff8c1a"]
const coresCategorias = {} 

function corPorCategoria(cat) {
  if (!coresCategorias[cat]) {
    const idx = Object.keys(coresCategorias).length % paleta.length
    coresCategorias[cat] = paleta[idx]
  }
  return coresCategorias[cat]
}

function renderDiario() {
  const hoje = new Date(dataSelecionada)
  const chave = formatarData(hoje)
  const tarefas = tarefasPorData[chave] || []
  const nomeDia = nomeCompletoDiaSemana(hoje)
  const dataExtenso = formatarDataExtenso(hoje)

  conteudo.innerHTML = `
        <h3>${nomeDia}, ${dataExtenso}</h3>
        <h2>Lista de Tarefas</h2>
        <div class="tarefas" id="lista-tarefas">
            ${tarefas.length === 0 ? "<p>Nenhuma tarefa adicionada.</p>" : ""}
        </div>
        <div class="sem-tarefa" onclick="openAddModal()">
            <div class="adicionar">
                <span class="icone">+</span>
                <p>Adicionar tarefa para hoje!</p>
            </div>
        </div>
        <canvas id="graficoDiario" width="280" height="280"></canvas>
        <div id="legendaDiaria"></div>
    `

  const tasksContainer = document.getElementById("lista-tarefas")
  tarefas.forEach((task, i) => {
    const taskElem = document.createElement("div")
    taskElem.classList.add("task")

    const left = document.createElement("div")
    left.classList.add("left")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = task.feita
    checkbox.addEventListener("change", () => {
      task.feita = !task.feita
      salvarTarefas()
      renderDiario()
      renderCarrossel()
    })

    const timeElem = document.createElement("span")
    timeElem.classList.add("time")
    timeElem.textContent = `${task.horaInicio} – ${task.horaFim}`

    const nameElem = document.createElement("span")
    nameElem.classList.add("name")
    nameElem.textContent = task.descricao

    left.appendChild(checkbox)
    left.appendChild(timeElem)
    left.appendChild(nameElem)

    const actions = document.createElement("div")
    actions.classList.add("actions")

    const favoriteBtn = document.createElement("button")
    favoriteBtn.classList.add("favorite-btn")
    if (task.favorito) favoriteBtn.classList.add("active")
    favoriteBtn.textContent = "⭐"
    favoriteBtn.addEventListener("click", () => toggleFavorito(chave, i))

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-btn")
    editBtn.textContent = "✏️"
    editBtn.addEventListener("click", () => openEditModal(task, chave, i))

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.textContent = "🗑️"
    deleteBtn.addEventListener("click", () => excluirTarefa(chave, i))

    actions.appendChild(favoriteBtn)
    actions.appendChild(editBtn)
    actions.appendChild(deleteBtn)

    taskElem.appendChild(left)
    taskElem.appendChild(actions)

    tasksContainer.appendChild(taskElem)
  })

  const categorias = {} 
  const tarefasConcluidas = tarefas.filter((t) => t.feita)
  tarefasConcluidas.forEach((t) => {
    const tempo = duracaoEmMinutos(t.horaInicio, t.horaFim)
    if (!categorias[t.descricao]) categorias[t.descricao] = 0
    categorias[t.descricao] += tempo
  })

  desenharGraficoRosca("graficoDiario", categorias)
  desenharLegenda("legendaDiaria", categorias)
}

function renderSemanal() {
  const semanaHtml = []
  const inicioSemana = getInicioSemana(new Date())

  for (let i = 0; i < 7; i++) {
    const data = new Date(inicioSemana.getTime() + i * 24 * 60 * 60 * 1000)
    const dataStr = formatarData(data)
    const diaNum = String(data.getDate()).padStart(2, "0")
    const diaSemana = diasSemana[data.getDay()]
    const destaque = dataStr === formatarData(dataSelecionada) ? "selecionado" : ""

    semanaHtml.push(`
            <div class="dia-semana ${destaque}" onclick="selecionarDiaSemanal('${dataStr}')">
                <div>${diaSemana}</div>
                <div>${diaNum}</div>
            </div>
        `)
  }

  const chaveSelecionada = formatarData(dataSelecionada)
  const tarefas = tarefasPorData[chaveSelecionada] || []
  const nomeDia = nomeCompletoDiaSemana(dataSelecionada)
  const dataExtenso = formatarDataExtenso(dataSelecionada)

  conteudo.innerHTML = `
        <div class="semana">${semanaHtml.join("")}</div>
        <div class="semana-conteudo">
            <h3>${nomeDia}, ${dataExtenso}</h3>
            <div class="tarefas" id="lista-tarefas-semanal">
                ${tarefas.length === 0 ? "<p>Nenhuma tarefa para este dia.</p>" : ""}
            </div>
        </div>
        <div class="sem-tarefa" onclick="openAddModalSemanal()">
            <div class="adicionar">
                <span class="icone">+</span>
                <p>Adicionar tarefas à essa semana!</p>
            </div>
        </div>
        <div id="graficoSemanal"></div>
    `

  const tasksContainer = document.getElementById("lista-tarefas-semanal")
  tarefas.forEach((task, i) => {
    const taskElem = document.createElement("div")
    taskElem.classList.add("task")

    const left = document.createElement("div")
    left.classList.add("left")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = task.feita
    checkbox.addEventListener("change", () => {
      task.feita = !task.feita
      salvarTarefas()
      renderSemanal()
      renderCarrossel()
    })

    const timeElem = document.createElement("span")
    timeElem.classList.add("time")
    timeElem.textContent = `${task.horaInicio} – ${task.horaFim}`

    const nameElem = document.createElement("span")
    nameElem.classList.add("name")
    nameElem.textContent = task.descricao

    left.appendChild(checkbox)
    left.appendChild(timeElem)
    left.appendChild(nameElem)

    const actions = document.createElement("div")
    actions.classList.add("actions")

    const favoriteBtn = document.createElement("button")
    favoriteBtn.classList.add("favorite-btn")
    if (task.favorito) favoriteBtn.classList.add("active")
    favoriteBtn.textContent = "⭐"
    favoriteBtn.addEventListener("click", () => toggleFavorito(chaveSelecionada, i))

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-btn")
    editBtn.textContent = "✏️"
    editBtn.addEventListener("click", () => openEditModal(task, chaveSelecionada, i))

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.textContent = "🗑️"
    deleteBtn.addEventListener("click", () => excluirTarefa(chaveSelecionada, i))

    actions.appendChild(favoriteBtn)
    actions.appendChild(editBtn)
    actions.appendChild(deleteBtn)

    taskElem.appendChild(left)
    taskElem.appendChild(actions)

    tasksContainer.appendChild(taskElem)
  })

  const categoriasSemanal = {}
  for (let i = 0; i < 7; i++) {
    const data = new Date(inicioSemana.getTime() + i * 24 * 60 * 60 * 1000)
    const chave = formatarData(data)
    const tarefasDia = tarefasPorData[chave] || []
    const tarefasConcluidasDia = tarefasDia.filter((t) => t.feita)
    tarefasConcluidasDia.forEach((t) => {
      const tempo = duracaoEmMinutos(t.horaInicio, t.horaFim)
      if (!categoriasSemanal[t.descricao]) categoriasSemanal[t.descricao] = 0
      categoriasSemanal[t.descricao] += tempo
    })
  }

  const containerSemanal = document.getElementById("graficoSemanal")
  if (containerSemanal) {
    containerSemanal.innerHTML = `
            <h3>Resumo da Semana (Tarefas Concluídas)</h3>
            ${Object.entries(categoriasSemanal)
              .map(([nome, min]) => {
                const horas = Math.floor(min / 60)
                const mins = min % 60
                const largura = Math.min((min / (40 * 60)) * 100, 100) 
                return `
                        <div style="margin: 10px 0;">
                            <div style="margin-bottom: 4px;">${nome}</div>
                            <div style="background: #eee; height: 24px; border-radius: 8px; overflow: hidden;">
                                <div style="
                                    width: ${largura}%;
                                    background: ${corPorCategoria(nome)};
                                    height: 100%;
                                    color: white;
                                    padding-left: 10px;
                                    line-height: 24px;">
                                    ${horas}h${mins > 0 ? " " + mins + "min" : ""}
                                </div>
                            </div>
                        </div>
                    `
              })
              .join("")}
        `
  }
}

function desenharGraficoRosca(canvasId, categoriasObj) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return

  if (Object.keys(categoriasObj).length === 0) {
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#666"
    ctx.font = "16px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Complete tarefas para ver o gráfico", canvas.width / 2, canvas.height / 2)
    return
  }

  canvas.replaceWith(canvas.cloneNode(true)) 
  const ctx = document.getElementById(canvasId).getContext("2d")
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: Object.keys(categoriasObj),
      datasets: [
        {
          data: Object.values(categoriasObj),
          backgroundColor: Object.keys(categoriasObj).map(corPorCategoria),
        },
      ],
    },
    options: {
      cutout: "70%",
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const min = ctx.raw
              return `${ctx.label}: ${Math.floor(min / 60)}h ${min % 60}min`
            },
          },
        },
      },
    },
  })
}

function desenharLegenda(containerId, categoriasObj) {
  const div = document.getElementById(containerId)
  if (!div) return

  if (Object.keys(categoriasObj).length === 0) {
    div.innerHTML = `
            <h3>Tempo por Categoria</h3>
            <p style="color: #666; font-style: italic;">Marque tarefas como concluídas para ver o resumo</p>
        `
    return
  }

  div.innerHTML = `
        <h3>Tempo por Categoria (Concluídas)</h3>
        ${Object.entries(categoriasObj)
          .map(
            ([nome, min]) => `
                    <div style="display:flex; align-items:center; margin-bottom:6px;">
                        <div style="width:15px; height:15px; background:${corPorCategoria(nome)}; border-radius:50%; margin-right:8px;"></div>
                        <span>${nome}</span>
                        <span style="margin-left:auto;">${Math.floor(min / 60)}h ${min % 60}min</span>
                    </div>
                `,
          )
          .join("")}
    `
}

function hideDaySelector() {
  const ds = document.getElementById("day-selector")
  if (ds) ds.classList.add("hidden")
}

function showDaySelector() {
  let ds = document.getElementById("day-selector")
  if (!ds) {
    ds = document.createElement("div")
    ds.id = "day-selector"
    ds.classList.add("day-selector")
    ds.innerHTML = `
            <p style="margin-top:8px; margin-bottom:4px;">Adicionar nos dia(s):</p>
            <div style="display:flex; flex-wrap:wrap; gap:4px 10px;">
                ${diasSemana
                  .map(
                    (d, idx) =>
                      `<label style="font-size:0.9rem;"><input type="checkbox" class="dow-checkbox" value="${idx}"> ${d}</label>`,
                  )
                  .join("")}
            </div>
        `
    const modalForm = document.getElementById("add-form")
    modalForm.insertBefore(ds, modalForm.querySelector(".modal-buttons"))
  }

  document.querySelectorAll(".dow-checkbox").forEach((cb) => {
    cb.checked = Number.parseInt(cb.value, 10) === dataSelecionada.getDay()
  })
  ds.classList.remove("hidden")
}

function openAddModal() {
  const addModal = document.getElementById("add-modal")
  addModal.classList.remove("hidden")
  hideDaySelector()

  const addForm = document.getElementById("add-form")
  addForm.onsubmit = (e) => {
    e.preventDefault()
    const horaInicio = document.getElementById("add-start-time").value
    const horaFim = document.getElementById("add-end-time").value
    const descricao = document.getElementById("add-name").value
    const chave = formatarData(dataSelecionada)

    if (!tarefasPorData[chave]) tarefasPorData[chave] = []
    tarefasPorData[chave].push({ horaInicio, horaFim, descricao, feita: false, favorito: false })
    salvarTarefas()
    renderDiario()
    renderCarrossel()
    addModal.classList.add("hidden")
    addForm.reset()
  }

  document.getElementById("cancel-add-btn").onclick = () => addModal.classList.add("hidden")
}

function openAddModalSemanal() {
  const addModal = document.getElementById("add-modal")
  addModal.classList.remove("hidden")
  showDaySelector()

  const addForm = document.getElementById("add-form")
  addForm.onsubmit = (e) => {
    e.preventDefault()
    const horaInicio = document.getElementById("add-start-time").value
    const horaFim = document.getElementById("add-end-time").value
    const descricao = document.getElementById("add-name").value

    let diasMarcados = Array.from(document.querySelectorAll(".dow-checkbox:checked")).map((cb) =>
      Number.parseInt(cb.value, 10),
    )
    if (diasMarcados.length === 0) diasMarcados = [dataSelecionada.getDay()]

    const inicioSemana = getInicioSemana(dataSelecionada)
    diasMarcados.forEach((idx) => {
      const diaData = new Date(inicioSemana.getTime() + idx * 24 * 60 * 60 * 1000)
      const chave = formatarData(diaData)
      if (!tarefasPorData[chave]) tarefasPorData[chave] = []
      tarefasPorData[chave].push({ horaInicio, horaFim, descricao, feita: false, favorito: false })
    })

    salvarTarefas()
    renderSemanal()
    renderCarrossel()
    addModal.classList.add("hidden")
    addForm.reset()
  }

  document.getElementById("cancel-add-btn").onclick = () => addModal.classList.add("hidden")
}

function openEditModal(task, chave, index) {
  const editModal = document.getElementById("edit-modal")
  const editStartTime = document.getElementById("edit-start-time")
  const editEndTime = document.getElementById("edit-end-time")
  const editName = document.getElementById("edit-name")

  currentEditingTask = task
  currentEditingKey = chave
  currentEditingIndex = index

  editStartTime.value = task.horaInicio
  editEndTime.value = task.horaFim
  editName.value = task.descricao

  editModal.classList.remove("hidden")

  const editForm = document.getElementById("edit-form")
  editForm.onsubmit = (e) => {
    e.preventDefault()
    saveEditedTask()
  }

  document.getElementById("cancel-edit-btn").onclick = () => {
    editModal.classList.add("hidden")
    currentEditingTask = null
    currentEditingKey = null
    currentEditingIndex = null
  }
}

function saveEditedTask() {
  if (!currentEditingTask || !currentEditingKey || currentEditingIndex === null) return

  const editStartTime = document.getElementById("edit-start-time")
  const editEndTime = document.getElementById("edit-end-time")
  const editName = document.getElementById("edit-name")

  tarefasPorData[currentEditingKey][currentEditingIndex] = {
    ...currentEditingTask,
    horaInicio: editStartTime.value,
    horaFim: editEndTime.value,
    descricao: editName.value,
  }

  salvarTarefas()

  const isDaily = document.getElementById("tab-diario").classList.contains("active")
  if (isDaily) {
    renderDiario()
  } else {
    renderSemanal()
  }
  renderCarrossel()

  document.getElementById("edit-modal").classList.add("hidden")
  currentEditingTask = null
  currentEditingKey = null
  currentEditingIndex = null
}

function selecionarDiaSemanal(dataStr) {
  const [y, m, d] = dataStr.split("-").map(Number)
  dataSelecionada = new Date(y, m - 1, d)
  dataSelecionada.setHours(0, 0, 0, 0)
  renderSemanal()
}

function excluirTarefa(chave, index) {
  tarefasPorData[chave].splice(index, 1)
  salvarTarefas()
  document.getElementById("tab-diario").classList.contains("active") ? renderDiario() : renderSemanal()
  renderCarrossel()
}

carregarTarefas()
renderDiario()
renderCarrossel()
