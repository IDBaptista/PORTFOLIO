let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

showSlides();

    function maverick() {
        window.open("https://investimento-1-cd2e.onrender.com", "_blank");
    }
    function gamemaster() {
        window.open("https://site-game-master-2.onrender.com", "_blank");
    }
    function gtmax() {
        window.open("https://projeto-inovar-gtmax-2024.onrender.com/", "_blank");
    }

    function atletas(){
        window.open("https://github.com/IDBaptista/PROJETO-LANDINGPAGE-ATLETAS", "_blank");
    }