const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function getVisibleSlides() {
  const width = window.innerWidth;

  if (width <= 768) return 1;        
  if (width <= 1024) return 2;       
  return 3;                         
}

function updateCarousel() {
  const visible = getVisibleSlides();
  const move = index * (100 / visible);
  track.style.transform = `translateX(-${move}%)`;
}

nextBtn.addEventListener('click', () => {
  const visible = getVisibleSlides();
  if (index < images.length - visible) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

window.addEventListener('resize', () => {
  index = 0;
  updateCarousel();
});
