async function login(email, senha) {
  try {
    const resposta = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`);
    const usuarios = await resposta.json();

    if (usuarios.length > 0) {
      const usuario = usuarios[0];
      sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      return true;
    } else {
      return false;
    }
  } catch (erro) {
    alert("Erro ao acessar o servidor: " + erro.message);
    return false;
  }
}
