document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLightbox();
});

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentGroup = [];
  let currentIndex = 0;

  document.querySelectorAll('[data-lightbox]').forEach((el) => {
    el.addEventListener('click', () => {
      const groupName = el.dataset.lightbox;
      currentGroup = Array.from(document.querySelectorAll(`[data-lightbox="${groupName}"]`));
      currentIndex = currentGroup.indexOf(el);
      openLightbox();
    });
  });

  function openLightbox() {
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    const item = currentGroup[currentIndex];
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt || '';
  }

  function showPrev(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
    updateLightboxImage();
  }

  function showNext(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentGroup.length;
    updateLightboxImage();
  }

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev(e);
    if (e.key === 'ArrowRight') showNext(e);
  });
}
