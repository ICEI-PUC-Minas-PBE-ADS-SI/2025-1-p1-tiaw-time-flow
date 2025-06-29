const carousel = document.getElementById('carousel');
const input = document.getElementById('newTask');
const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const diaAtual = diasSemana[new Date().getDay()];

let tarefasSalvas = JSON.parse(localStorage.getItem('tarefasSalvas')) || [];
let tarefasPorDia = JSON.parse(localStorage.getItem('tarefasPorDia')) || {
  segunda: [],
  terça: [],
  quarta: [],
  quinta: [],
  sexta: [],
  sábado: [],
  domingo: [],
};

function renderCarousel() {
  carousel.innerHTML = '';

  tarefasSalvas.forEach((tarefa) => {
    const div = document.createElement('div');
    div.className = 'task';
    div.innerHTML = `<p>${tarefa}</p><button class="add-btn">Adicionar para hoje</button>`;
    div.querySelector('button').addEventListener('click', () => {
      if (!tarefasPorDia[diaAtual].includes(tarefa)) {
        tarefasPorDia[diaAtual].push(tarefa);
        localStorage.setItem('tarefasPorDia', JSON.stringify(tarefasPorDia));
        alert(`Tarefa "${tarefa}" adicionada para ${diaAtual}!`);
      } else {
        alert(`A tarefa "${tarefa}" já está adicionada para hoje.`);
      }
    });
    carousel.appendChild(div);
  });
}

document.getElementById('taskForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const tarefa = input.value.trim();
  if (tarefa !== '' && !tarefasSalvas.includes(tarefa)) {
    tarefasSalvas.push(tarefa);
    localStorage.setItem('tarefasSalvas', JSON.stringify(tarefasSalvas));
    input.value = '';
    renderCarousel();
  }
});

document.getElementById('clearTasks').addEventListener('click', () => {
  if (confirm('Tem certeza que deseja apagar todas as tarefas salvas?')) {
    tarefasSalvas = [];
    tarefasPorDia = {
      segunda: [],
      terça: [],
      quarta: [],
      quinta: [],
      sexta: [],
      sábado: [],
      domingo: [],
    };
    localStorage.removeItem('tarefasSalvas');
    localStorage.removeItem('tarefasPorDia');
    renderCarousel();
  }
});

renderCarousel();

// Arraste com mouse e toque
const wrapper = document.querySelector('.carousel-wrapper');
let isDown = false;
let startX;
let scrollLeft;

wrapper.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener('mouseleave', () => {
  isDown = false;
});

wrapper.addEventListener('mouseup', () => {
  isDown = false;
});

wrapper.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - wrapper.offsetLeft;
  const walk = (x - startX) * 1.5;
  wrapper.scrollLeft = scrollLeft - walk;
});

// Toque em dispositivos móveis
wrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX - wrapper.offsetLeft;
  const walk = (x - startX) * 1.5;
  wrapper.scrollLeft = scrollLeft - walk;
});
