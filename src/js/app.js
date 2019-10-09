// ==================================================
// NAV
// ==================================================

const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('#nav');

function toggleNav() {
  nav.classList.toggle('active');
}

navBtn.addEventListener('click', toggleNav);
