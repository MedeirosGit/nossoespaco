/**
 * Controla a autenticação na página de login
 * Verifica as credenciais e redireciona para a página inicial se válidas
 */

(function() {
  'use strict';

  const VALID_USERS = ['Wendell', 'Hellen'];
  const VALID_PASSWORD = '2410';
  const REDIRECT_URL = '../html/pagina-inicial.html';

  const loginForm = document.getElementById('login-form');
  const loginInput = document.getElementById('login');
  const passwordInput = document.getElementById('senha');

  function validateCredentials(username, password) {
    return VALID_USERS.includes(username) && password === VALID_PASSWORD;
  }

  function handleLogin(event) {
    event.preventDefault();

    const username = loginInput.value.trim();
    const password = passwordInput.value;

    if (validateCredentials(username, password)) {
      window.location.href = REDIRECT_URL;
    } else {
      alert('Nome de usuário ou senha incorretos. Tente novamente.');
      loginInput.focus();
    }
  }

  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
})();
