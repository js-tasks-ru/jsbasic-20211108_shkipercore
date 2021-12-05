function initCarousel() {

  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const carousel = document.querySelector('.carousel__inner');
  const slideWight = document.querySelector('.carousel__slide').offsetWidth;
  const slideCount = document.querySelectorAll('.carousel__slide').length;

  let currentPosition = 0;
  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', () =>
  {
    currentPosition = currentPosition - slideWight;
    moveCarousel();
  });

  arrowLeft.addEventListener('click', () =>
  {
    currentPosition = currentPosition + slideWight;
    moveCarousel();
  });

  function moveCarousel() {
    carousel.style.transform = `translateX(${currentPosition}px)`;

    if (currentPosition === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }

    if (Math.abs(currentPosition) === slideWight * (slideCount - 1))
    {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }
}
