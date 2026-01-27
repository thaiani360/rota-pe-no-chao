const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;
const visible = 3;

function updateCarousel() {
  const move = index * (100 / visible);
  track.style.transform = `translateX(-${move}%)`;
}

nextBtn.addEventListener('click', () => {
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
