// script.js
const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('navbar-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');    // ← was 'show'
});
