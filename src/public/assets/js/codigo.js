document.addEventListener("DOMContentLoaded", () => {
  const imageUpload = document.getElementById("imageUpload");
  const profileImage = document.getElementById("profileImage");
  const userNameInput = document.getElementById("userName");

  const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

  if (!usuarioLogado || !usuarioLogado.id) {
    alert("Erro ao carregar dados do usuário.");
    window.location.href = "login.html";
    return;
  }

  const avatarKey = `avatarUsuario_${usuarioLogado.id}`;
  const nomeKey = `nomeUsuario_${usuarioLogado.id}`;

  userNameInput.value = localStorage.getItem(nomeKey) || usuarioLogado.nome || "Usuário não identificado";

  const avatarSalvo = localStorage.getItem(avatarKey);
  if (avatarSalvo) {
    profileImage.src = avatarSalvo;
  }

  userNameInput.addEventListener("blur", async () => {
    const novoNome = userNameInput.value.trim();
    if (novoNome && novoNome !== usuarioLogado.nome) {
      try {
        const resposta = await fetch(`http://localhost:3000/usuarios/${usuarioLogado.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nome: novoNome })
        });

        if (resposta.ok) {
          usuarioLogado.nome = novoNome;
          sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
          localStorage.setItem(nomeKey, novoNome);
          alert("Nome atualizado com sucesso!");
        } else {
          alert("Erro ao atualizar o nome.");
        }
      } catch (erro) {
        alert("Erro de rede: " + erro.message);
      }
    }
  });

  imageUpload.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        profileImage.src = reader.result;
        localStorage.setItem(avatarKey, reader.result);
      };
      reader.readAsDataURL(file);
    }
  });

  profileImage.addEventListener("click", () => {
    imageUpload.click();
  });
});
