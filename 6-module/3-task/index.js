import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  #slides = [];
  elem = null;

  constructor(slides) {
    this.#slides = slides;
    this.elem = this.#createCarousel();
  }

  #slideTemplate(slides) {

    return `
    <div class="carousel__slide" data-id="${slides.id}">
      <img src="/assets/images/carousel/${slides.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slides.price.toFixed(2)}</span>
        <div class="carousel__title">${slides.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `;
  }

  #createCarousel() {

    let carousel = createElement(`

    <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    ${this.#slides.map(this.#slideTemplate).join('')}
    </div>
    </div>
    `);

    this.#initCarousel(carousel);

    return carousel;
  }

  #initCarousel(carouselElement) {

    const carousel = carouselElement;
    const slides = carousel.querySelector('.carousel__inner');
    const arrowRight = carousel.querySelector('.carousel__arrow_right');
    const arrowLeft = carousel.querySelector('.carousel__arrow_left');
    const slideCount = carousel.querySelectorAll('.carousel__slide').length;

    let currentPosition = 0;

    arrowLeft.style.display = 'none';

    carousel.addEventListener('click', event => {
      const slideWight = carousel.querySelector('.carousel__slide').offsetWidth;
      let target = event.target.closest('div');

      if (target === arrowRight) {
        currentPosition = currentPosition - slideWight;
      } else if (target === arrowLeft) {
        currentPosition = currentPosition + slideWight;
      }

      slides.style.transform = `translateX(${currentPosition}px)`;

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

      if (event.target.classList.contains("carousel__button")) {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: event.target.closest('.carousel__slide').dataset.id,
          bubbles: true
        }));
      }
    });
  }
}
