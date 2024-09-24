const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const imageWidth = 200; // Уменьшенная ширина изображений
const spacing = 20; // Расстояние между изображениями

function showGallery() {
  gallery.style.transform = `translateX(${-currentIndex * (imageWidth + spacing)}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showGallery();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showGallery();
});

showGallery();