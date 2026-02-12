// Scroll Reveal
const reveals = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("reveal", "active");
    }
  });
});
