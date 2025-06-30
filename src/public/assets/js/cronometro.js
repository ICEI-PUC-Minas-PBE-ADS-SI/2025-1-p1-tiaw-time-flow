  function alternarMenu(id) {
      const menu = document.getElementById(id);
      const conteudo = menu.querySelector('.conteudo-menu');
      conteudo.classList.toggle('mostrar');
    }

    function mudarValor(botao, delta) {
      const valor = botao.parentElement.querySelector(".valor");
      let numero = parseInt(valor.textContent);
      numero = Math.max(0, numero + delta);
      valor.textContent = numero;
    }

    function salvarAtividade() {
  const nome = document.getElementById("nomeAtividade").value.trim();
  const cor = document.getElementById("corEscolhida").value;

  const menuSessao = document.querySelector("#menu-sessao .conteudo-menu");
  const menuPeriodico = document.querySelector("#menu-periodico .conteudo-menu");

  const usandoSessao = menuSessao.classList.contains("mostrar");
  const usandoPeriodico = menuPeriodico.classList.contains("mostrar");

  let horas = 0;
  let minutos = 0;

  if (usandoSessao) {
    horas = parseInt(document.querySelector("#menu-sessao .entrada-tempo div:nth-child(1) .valor").textContent) || 0;
    minutos = parseInt(document.querySelector("#menu-sessao .entrada-tempo div:nth-child(2) .valor").textContent) || 0;
  } else if (usandoPeriodico) {
    horas = parseInt(document.querySelector("#menu-periodico .entrada-tempo div:nth-child(1) .valor").textContent) || 0;
    minutos = parseInt(document.querySelector("#menu-periodico .entrada-tempo div:nth-child(2) .valor").textContent) || 0;
  }

  const totalMinutos = horas * 60 + minutos;
  const totalSegundos = totalMinutos * 60;

  if (!nome || totalSegundos === 0) {
    alert("Preencha o nome e defina um tempo maior que zero.");
    return;
  }

  const novaAtividade = {
    name: nome,
    color: cor,
    totalSeconds: totalSegundos,
    elapsed: 0,
    tipo: usandoPeriodico ? "periodica" : "unica"
  };

  const activities = JSON.parse(localStorage.getItem("activities")) || [];
  activities.push(novaAtividade);
  localStorage.setItem("activities", JSON.stringify(activities));

  window.location.href = "cronometro.html";
}

