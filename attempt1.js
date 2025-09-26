// script.js – Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  // Find all carousel containers on the page
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    let currentIndex = 0;
    const images = carousel.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    // Function to update which image is visible
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    // Show next image on "next" button click
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    // Show previous image on "prev" button click
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  });
});
