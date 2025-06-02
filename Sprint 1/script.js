function goBack() {
  alert("Linkar com a tela anterior.");
  // window.history.back();
}

document.getElementById('tarefas').addEventListener('change', function () {
  console.log('Lembretes de Tarefas:', this.checked);
});

document.getElementById('calendario').addEventListener('change', function () {
  console.log('Alertas de Calendário:', this.checked);
});
