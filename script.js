document.addEventListener("DOMContentLoaded", function () {
    //data atual
    const currentDateElem = document.getElementById("data-hoje");
    const date = new Date();
    currentDateElem.innerText = `${date.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
  
    const tasksContainer = document.getElementById("lista-tarefas");
    const addTaskBtn = document.getElementById("tarefa-expecifica");
  
    let tasks = [];
  
 
  
  });
  