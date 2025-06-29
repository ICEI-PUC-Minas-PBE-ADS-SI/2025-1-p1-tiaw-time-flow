document.addEventListener("DOMContentLoaded", function () {
    //data atual
    const currentDateElem = document.getElementById("data-hoje");
    const date = new Date();
    currentDateElem.innerText = `${date.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
  
    const tasksContainer = document.getElementById("lista-tarefas");
    const addTaskBtn = document.getElementById("tarefa-expecifica");
  
    let tasks = [];
  
 
  // Função para salvar as tarefas no LocalStorage
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    // Função para adicionar nova tarefa
    function addTask(time, name) {
      const newTask = { time, name, id: Date.now() };
      tasks.push(newTask);
      renderTasks();
      saveTasks();
    }
  
    // Função para renderizar as tarefas
    function renderTasks() {
      tasksContainer.innerHTML = "";
      tasks.forEach(task => {
        const taskElem = document.createElement("div");
        taskElem.classList.add("task");
  
        const left = document.createElement("div");
        left.classList.add("left");
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
  
        const timeElem = document.createElement("span");
        timeElem.classList.add("time");
        timeElem.textContent = task.time;
  
        const nameElem = document.createElement("span");
        nameElem.classList.add("name");
        nameElem.textContent = task.name;
  
        left.appendChild(checkbox);
        left.appendChild(timeElem);
        left.appendChild(nameElem);
  
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "✏️";
  
        editBtn.addEventListener("click", () => openEditModal(task));
  
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "🗑️";
  
        deleteBtn.addEventListener("click", () => confirmDelete(task));
  
        taskElem.appendChild(left);
        taskElem.appendChild(editBtn);
        taskElem.appendChild(deleteBtn);
        tasksContainer.appendChild(taskElem);
      });
    }
  
    // Função para abrir o modal de edição
    function openEditModal(task) {
      const editModal = document.getElementById("edit-modal");
      const editTime = document.getElementById("edit-time");
      const editName = document.getElementById("edit-name");
  
      editTime.value = task.time;
      editName.value = task.name;
  
      editModal.classList.remove("hidden");
  
      const saveBtn = document.querySelector(".save-btn");
      saveBtn.onclick = function (e) {
        e.preventDefault();
        task.time = editTime.value;
        task.name = editName.value;
        renderTasks();
        saveTasks();
        editModal.classList.add("hidden");
      };
  
      const cancelBtn = document.getElementById("cancel-btn");
      cancelBtn.onclick = function () {
        editModal.classList.add("hidden");
      };
    }
  
    // Função para adicionar tarefa pelo modal
    function openAddModal() {
      const addModal = document.getElementById("add-modal");
      addModal.classList.remove("hidden");
  
      const addForm = document.getElementById("add-form");
  
      addForm.onsubmit = function (e) {
        e.preventDefault();
        const time = document.getElementById("add-time").value;
        const name = document.getElementById("add-name").value;
  
        addTask(time, name);
        addModal.classList.add("hidden");
      };
  
      const cancelAddBtn = document.getElementById("cancel-add-btn");
      cancelAddBtn.onclick = function () {
        addModal.classList.add("hidden");
      };
    }
  
    // Função para confirmar e excluir uma tarefa
    function confirmDelete(task) {
      const confirmDeleteModal = document.createElement("div");
      confirmDeleteModal.classList.add("delete-modal");
      confirmDeleteModal.innerHTML = `
        <div class="delete-modal-content">
          <h2>Excluir Tarefa</h2>
          <p>Tem certeza que deseja excluir a tarefa "${task.name}"?</p>
          <div class="delete-modal-buttons">
            <button class="confirm-delete">Confirmar</button>
            <button class="cancel-delete">Cancelar</button>
          </div>
        </div>
      `;
  
      document.body.appendChild(confirmDeleteModal);
  
      const confirmBtn = confirmDeleteModal.querySelector(".confirm-delete");
      const cancelBtn = confirmDeleteModal.querySelector(".cancel-delete");
  
      confirmBtn.addEventListener("click", () => {
        tasks = tasks.filter(t => t.id !== task.id);
        renderTasks();
        saveTasks();
        confirmDeleteModal.remove();
      });
  
      cancelBtn.addEventListener("click", () => {
        confirmDeleteModal.remove();
      });
    }
  
    // Inicializando a interface
    addTaskBtn.addEventListener("click", openAddModal);
  
    // Carregar tarefas do LocalStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      tasks = savedTasks;
      renderTasks();
    }
  });
  

  