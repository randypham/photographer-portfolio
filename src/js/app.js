// ==================================================
// NAV
// ==================================================

const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('#nav');

function toggleNav() {
  nav.classList.toggle('active');
}

navBtn.addEventListener('click', toggleNav);

// ==================================================
// IMAGE GALLERY MODAL
// ==================================================
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');

if (gallery && modal) {
  function showModal(e) {
    if (e.target.className === 'gallery-img') {
      const modalImg = document.querySelector('.modal-img');
      const modalTitle = document.querySelector('.modal-title');
      const src = e.target.getAttribute('src');
      const title = e.target.getAttribute('alt');

      modalImg.setAttribute('src', src);
      modalImg.setAttribute('alt', title);
      modalTitle.textContent = title;

      modal.classList.add('active');
    }
  }

  function exitModal(e) {
    if (
      e.target.classList.contains('modal') ||
      e.target.classList.contains('modal-exit')
    ) {
      modal.classList.remove('active');
    }
  }

  gallery.addEventListener('click', showModal);
  modal.addEventListener('click', exitModal);
}
