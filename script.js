// Mobile navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('navbar-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dark mode toggle
const darkToggle = document.getElementById('dark-mode-toggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
