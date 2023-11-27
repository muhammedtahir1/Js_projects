const icon = document.getElementById('mobile-nav-icon');
const mobileNav = document.querySelector('.mobile-nav');

let isMobileNavopen = false;

icon.addEventListener('click', () => {
  isMobileNavopen = !isMobileNavopen;
  if (!isMobileNavopen) {
    mobileNav.style.display = 'block';
  } else {
    mobileNav.style.display = 'none';
  }
})