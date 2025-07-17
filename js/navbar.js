function toggleMenu() {
    const navSection = document.querySelector('.nav-section');
    const hamburger = document.querySelector('.hamburger-menu');

    navSection.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Menüyü dışarı tıklayınca kapat
document.addEventListener('click', function (event) {
    const navSection = document.querySelector('.nav-section');
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    if (!nav.contains(event.target)) {
        navSection.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Toggle theme dropdown on mobile
document.querySelectorAll('.themes, .language').forEach(el => {
  el.addEventListener('click', function(e) {
    if(window.innerWidth <= 768) {
      e.stopPropagation();
      el.classList.toggle('open');
      // Close others
      document.querySelectorAll('.themes, .language').forEach(other => {
        if(other !== el) other.classList.remove('open');
      });
    }
  });
});
// Optional: close on outside click
document.addEventListener('click', function() {
  document.querySelectorAll('.themes, .language').forEach(el => el.classList.remove('open'));
});

document.querySelectorAll('.nav-about, .nav-media').forEach(el => {
  el.addEventListener('click', function(e) {
    if(window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      el.classList.toggle('open');
      // Close others
      document.querySelectorAll('.nav-about, .nav-media').forEach(other => {
        if(other !== el) other.classList.remove('open');
      });
    }
  });
});