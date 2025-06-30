const stars = document.querySelectorAll(".star")
const buttons = document.getElementById("buttons")
const comentarioInput = document.getElementById("comentario")
const comentariosLista = document.getElementById("comentarios-lista")
let selectedRating = 0

const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado")) || { nome: "Anônimo" }

// Event listeners para as estrelas
stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = Number.parseInt(star.getAttribute("data-value"))
    updateStars(selectedRating)
    buttons.classList.remove("hidden")
  })

  // Efeito hover
  star.addEventListener("mouseenter", () => {
    const value = Number.parseInt(star.getAttribute("data-value"))
    highlightStars(value)
  })
})

// Reset hover quando sair da área das estrelas
document.querySelector(".stars-container").addEventListener("mouseleave", () => {
  updateStars(selectedRating)
})

function highlightStars(rating) {
  stars.forEach((star) => {
    const value = Number.parseInt(star.getAttribute("data-value"))
    star.classList.toggle("active", value <= rating)
  })
}

function updateStars(rating) {
  stars.forEach((star) => {
    const value = Number.parseInt(star.getAttribute("data-value"))
    star.classList.toggle("active", value <= rating)
  })
}

// Botão cancelar
document.getElementById("cancel-button").addEventListener("click", () => {
  selectedRating = 0
  comentarioInput.value = ""
  updateStars(selectedRating)
  buttons.classList.add("hidden")
  showToast("Avaliação cancelada", "error")
})

// Botão confirmar
document.getElementById("confirm-button").addEventListener("click", () => {
  const comentario = comentarioInput.value.trim()

  if (selectedRating === 0) {
    showToast("Por favor, selecione uma nota", "error")
    return
  }

  if (comentario === "") {
    showToast("Por favor, escreva um comentário", "error")
    return
  }

  const novoComentario = {
    nome: usuarioLogado.nome || "Anônimo",
    estrelas: selectedRating,
    comentario: comentario,
    data: new Date().toLocaleDateString("pt-BR"),
  }

  const comentarios = JSON.parse(localStorage.getItem("comentariosApp")) || []
  comentarios.unshift(novoComentario) // Adiciona no início da lista
  localStorage.setItem("comentariosApp", JSON.stringify(comentarios))

  // Reset do formulário
  comentarioInput.value = ""
  selectedRating = 0
  updateStars(selectedRating)
  buttons.classList.add("hidden")

  renderComentarios()
  showToast("Avaliação enviada com sucesso!", "success")
})

function renderComentarios() {
  const comentarios = JSON.parse(localStorage.getItem("comentariosApp")) || []

  if (comentarios.length === 0) {
    comentariosLista.innerHTML = `
            <div class="empty-comments">
                <div class="empty-comments-icon">💬</div>
                <h3>Nenhum comentário ainda</h3>
                <p>Seja o primeiro a avaliar este app!</p>
            </div>
        `
    return
  }

  comentariosLista.innerHTML = ""

  comentarios.forEach(({ nome, estrelas, comentario, data }) => {
    const div = document.createElement("div")
    div.classList.add("comentario", "fade-in")

    div.innerHTML = `
            <div class="comentario-header">
                <span class="comentario-nome">${nome}</span>
                <span class="comentario-estrelas">${"★".repeat(estrelas)}</span>
            </div>
            <p class="comentario-texto">${comentario}</p>
            ${data ? `<small style="color: var(--gray-500); font-size: 0.8rem;">${data}</small>` : ""}
        `

    comentariosLista.appendChild(div)
  })
}

// Função para mostrar toast notifications
function showToast(message, type = "success") {
  // Remove toast existente se houver
  const existingToast = document.querySelector(".toast")
  if (existingToast) {
    existingToast.remove()
  }

  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.textContent = message

  document.body.appendChild(toast)

  // Mostra o toast
  setTimeout(() => toast.classList.add("show"), 100)

  // Remove o toast após 3 segundos
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

// Contador de caracteres para o textarea
comentarioInput.addEventListener("input", () => {
  const maxLength = comentarioInput.getAttribute("maxlength")
  const currentLength = comentarioInput.value.length

  // Você pode adicionar um contador visual aqui se desejar
  if (currentLength >= maxLength * 0.9) {
    comentarioInput.style.borderColor = "var(--warning)"
  } else {
    comentarioInput.style.borderColor = "var(--gray-200)"
  }
})

// Inicializar a página
document.addEventListener("DOMContentLoaded", () => {
  renderComentarios()
})

// Adicionar alguns comentários de exemplo se não houver nenhum
if (!localStorage.getItem("comentariosApp")) {
  const comentariosExemplo = [
    {
      nome: "Maria Silva",
      estrelas: 5,
      comentario: "Excelente app! Muito fácil de usar e tem todas as funcionalidades que preciso.",
      data: "15/12/2024",
    },
    {
      nome: "João Santos",
      estrelas: 4,
      comentario: "Muito bom, mas poderia ter mais opções de personalização.",
      data: "14/12/2024",
    },
    {
      nome: "Ana Costa",
      estrelas: 5,
      comentario: "Perfeito! Recomendo para todos. Interface linda e funciona muito bem.",
      data: "13/12/2024",
    },
  ]

  localStorage.setItem("comentariosApp", JSON.stringify(comentariosExemplo))
  renderComentarios()
}
