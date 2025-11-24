// script.js - versão simples (sem frameworks)
// Hoje versão básica: sem funcionalidades obrigatórias em JS para a versão 1.
// Mantive o arquivo para futuras extensões (ex.: menu mobile, filtro, toggle de tema).

// Pequena função para melhorar foco ao clicar em links (a11y)
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  });
});
