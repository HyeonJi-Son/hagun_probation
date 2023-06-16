const fadeSwiper = new Swiper('.fade-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 1000,
});

const listSwiper = new Swiper('.list-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  slidesPerView: 4,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

fadeSwiper.controller.control = listSwiper;
listSwiper.controller.control = fadeSwiper;