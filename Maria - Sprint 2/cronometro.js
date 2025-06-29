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
      const nome = document.getElementById("nomeAtividade").value;
      const cor = document.getElementById("corEscolhida").value;

      const horas = parseInt(document.querySelector("#menu-sessao .entrada-tempo div:nth-child(1) .valor").textContent);
      const minutos = parseInt(document.querySelector("#menu-sessao .entrada-tempo div:nth-child(2) .valor").textContent);

      const totalMinutos = horas * 60 + minutos;
      const tempoFormatado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;

      const novaAtividade = {
        nome,
        cor,
        tempo: tempoFormatado,
        segundosTotais: totalMinutos * 60,
        decorrido: 0
      };

      const atividades = JSON.parse(localStorage.getItem("atividades")) || [];
      atividades.push(novaAtividade);
      localStorage.setItem("atividades", JSON.stringify(atividades));

      window.location.href = "cronometro.html";
    }

