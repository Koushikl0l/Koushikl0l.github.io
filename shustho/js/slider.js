document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".card-slider .slide");
    let current = 0;
  
    document.getElementById("next").onclick = () => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    };
  
    document.getElementById("prev").onclick = () => {
      slides[current].classList.remove("active");
      current = (current - 1 + slides.length) % slides.length;
      slides[current].classList.add("active");
    };
  });