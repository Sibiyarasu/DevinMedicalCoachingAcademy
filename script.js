// Toggle navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  // Change icon between ⋮ and ✖
  if (navMenu.classList.contains('show')) {
    menuToggle.innerHTML = '&times;'; // X icon
  } else {
    menuToggle.innerHTML = '&#8942;'; // 3 dots
  }
});
