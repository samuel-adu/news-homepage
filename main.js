const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('menu');
const navBackdrop = document.querySelector('.nav__backdrop');

// Toggle menu visibility
menuToggle.addEventListener('click', function () {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  navList.classList.toggle('nav__list--open');
  navBackdrop.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', function (event) {
  if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
    navList.classList.remove('nav__list--open');
    menuToggle.setAttribute('aria-expanded', 'false');
    navBackdrop.classList.remove('show');
  }
});

// Handle keyboard navigation
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    navList.classList.remove('nav__list--open');
    menuIcon.setAttribute('aria-expanded', 'false');
    navBackdrop.classList.remove('show');
  }
});
