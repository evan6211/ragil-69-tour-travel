// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const konten = document.getElementById("main-content");

  if (preloader && konten) {
    setTimeout(() => {
      preloader.style.display = "none";
      konten.style.display = "block";
    }, 8000);
  }
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  if (!hamburger.querySelector('span')) {
    const bar = document.createElement('span');
    hamburger.appendChild(bar);
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');

    const items = navLinks.querySelectorAll('li');
    items.forEach((item, index) => {
      item.style.animation = 'none';
      void item.offsetWidth;
      item.style.animation = `slideDown 0.4s ease forwards ${index * 0.1}s`;
    });
  });
}

// Background hero fade-in
window.addEventListener('load', () => {
  const heroSection = document.querySelector('.fade-in-bg');
  if (heroSection) {
    heroSection.classList.add('show');
  }
});

// Rute scroll animasi (hanya jika elemen ada)
const rute = document.querySelector('.jalur-rute');
if (rute) {
  window.addEventListener('scroll', () => {
    const posisi = rute.getBoundingClientRect().top;
    const layar = window.innerHeight;

    if (posisi < layar - 100) {
      rute.classList.add('show-rute');
    }
  });
}

// Fade-up animasi scroll
function showOnScroll(selector) {
  const targets = document.querySelectorAll(selector);

  if (targets.length > 0) {
    window.addEventListener('scroll', () => {
      targets.forEach(target => {
        const top = target.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
          target.classList.add('show');
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showOnScroll('.fade-up');

  // Ketik animasi setelah preloader
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const konten = document.getElementById("main-content");
    const typingText = document.querySelector(".judul-pesan");

    if (konten && typingText) {
      setTimeout(() => {
        if (preloader) preloader.style.display = "none";
        konten.style.display = "block";

        setTimeout(() => {
          typingText.classList.add("typing");
        }, 100);
      }, 5000);
    }
  });
});