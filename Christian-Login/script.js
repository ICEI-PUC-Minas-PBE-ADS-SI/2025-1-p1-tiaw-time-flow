document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Exemplo simples de validação (você pode substituir por autenticação real)
  if (email === "teste@exemplo.com" && senha === "123456") {
    alert("Login bem-sucedido!");
    // Redirecionar para a página principal, se desejar
  } else {
    alert("E-mail ou senha incorretos!");
  }
});
