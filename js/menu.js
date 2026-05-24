/**
 * Controla o menu de navegação responsivo
 * Alterna a visibilidade do menu ao clicar no botão hamburguer
 */

(function() {
  'use strict';

  const MENU_HIDDEN = 'none';
  const MENU_VISIBLE = 'block';
  const ARIA_EXPANDED_FALSE = 'false';
  const ARIA_EXPANDED_TRUE = 'true';

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  function toggleMenu() {
    if (!navMenu || !menuToggle) return;

    const isHidden = navMenu.style.display === MENU_HIDDEN || !navMenu.style.display;
    
    navMenu.style.display = isHidden ? MENU_VISIBLE : MENU_HIDDEN;
    menuToggle.setAttribute('aria-expanded', isHidden ? ARIA_EXPANDED_TRUE : ARIA_EXPANDED_FALSE);
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }
})();
