// Função para verificar o login
function verificarLogin() {
  // Obtendo os valores inseridos nos campos de login e senha
  var username = document.getElementById("login").value;
  var password = document.getElementById("senha").value;

  // Verificando se o nome de usuário e a senha estão corretos
  if (
    (username === "Wendell" || username === "Hellen") &&
    password === "2410"
  ) {
    // Redirecionando o usuário para outro site após o login bem-sucedido
    window.location.href = "../html/pagina-inicial.html"; // Substitua com o URL desejado
  } else {
    alert("Nome de usuário ou senha incorretos. Tente novamente.");
  }

  // Evitar que o formulário seja enviado e a página recarregada
  event.preventDefault();
}

// Adicionando um evento de clique ao botão 'Entrar' para chamar a função verificarLogin()
document.getElementById("entrar").addEventListener("click", verificarLogin);
