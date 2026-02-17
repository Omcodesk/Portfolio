/* =====================================
   Portfolio Interaction System
===================================== */

document.addEventListener("DOMContentLoaded", () => {
  initIntro();
  initScrollReveal();
});

/* =====================================
   Intro Animation Control
===================================== */

function initIntro() {
  const overlay = document.querySelector(".intro-overlay");

  if (!overlay) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      overlay.classList.add("reveal");

      // Remove overlay from DOM after animation completes
      setTimeout(() => {
        overlay.style.display = "none";
      }, 600);

    }, 900); // match slice animation timing
  });
}

/* =====================================
   Scroll Reveal System (Optimized)
===================================== */

function initScrollReveal() {
  const sections = document.querySelectorAll(".section");

  if (!sections.length) return;

  const revealOptions = {
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "active");
        observer.unobserve(entry.target); // reveal once
      }
    });
  }, revealOptions);

  sections.forEach(section => {
    revealObserver.observe(section);
  });
}
