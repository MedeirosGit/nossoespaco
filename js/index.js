/**
 * Controla a interação da página inicial (index.html)
 * Quando o usuário clica em "Sim", muda o texto e redireciona para a página de login
 */

(function() {
  'use strict';

  const QUESTION_TITLE = 'Aceita viver comigo pelo resto de nossas vidas?';
  const SUCCESS_TITLE = 'Você tomou a decisão correta';
  const WELCOME_MESSAGE = 'Seja bem-vinda ao nosso site, amor';
  const REDIRECT_DELAY = 3000;
  const REDIRECT_URL = 'login.html';

  const titleElement = document.querySelector('.question-title');
  const messageElement = document.querySelector('.response-message');
  const yesButton = document.querySelector('.button--yes');

  function handleYesClick() {
    titleElement.textContent = SUCCESS_TITLE;
    messageElement.textContent = WELCOME_MESSAGE;
    
    setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, REDIRECT_DELAY);
  }

  if (yesButton) {
    yesButton.addEventListener('click', handleYesClick);
  }
})();
