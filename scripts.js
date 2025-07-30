// ========== ESTILOFT – scripts.js ==========

// Scroll suave para navegación con enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animación de entrada para el logo
window.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo-estiloft');
  if (logo) {
    logo.style.opacity = 0;
    logo.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      logo.style.transition = 'all 0.8s ease';
      logo.style.opacity = 1;
      logo.style.transform = 'translateY(0)';
    }, 300);
  }

  // Funcionalidad del carrusel
  const carouselContainer = document.querySelector('.carousel-container');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  const desplazamiento = 320; // Valor en px que desplaza por clic

  if (carouselContainer && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({
        left: -desplazamiento,
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({
        left: desplazamiento,
        behavior: 'smooth'
      });
    });
  }
});
// Indicador de scroll en mobile
const indicatorDots = document.querySelectorAll('.slider-indicator span');
const track = document.querySelector('.carousel-track');

if (track && indicatorDots.length) {
  track.addEventListener('scroll', () => {
    const index = Math.round(track.scrollLeft / track.clientWidth);
    indicatorDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  });
}

// Preparado para futuras funciones

