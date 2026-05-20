let slides = document.querySelectorAll(".slides img");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let interval = setInterval(nextSlide, 4000); 

function showSlide(index) {

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });

 
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index) {
      dot.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}


document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetInterval();
});
document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetInterval();
});


dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
    resetInterval();
  });
});


function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 4000);
}
function openLightbox(el) {
  const src = el.getAttribute("src");
  const content = document.getElementById("lightbox-content");
  content.innerHTML = '<img src="${src}" alt="Capture">';
  document.getElementById("lightbox").classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.getElementById("lightbox-content").innerHTML = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

  document.querySelectorAll('img.clickable').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {

      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0,0,0,0.8)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;

      const bigImg = document.createElement('img');
      bigImg.src = img.src;
      bigImg.style.maxWidth = '90vw';
      bigImg.style.maxHeight = '90vh';
      bigImg.style.boxShadow = '0 0 30px #000';

      overlay.addEventListener('click', () => overlay.remove());

      overlay.appendChild(bigImg);
      document.body.appendChild(overlay);
    });
  });
