
const fadeSwiper = new Swiper('.fade-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  effect: 'fade',
});

const listSwiper = new Swiper('.list-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

fadeSwiper.controller.control = listSwiper;
listSwiper.controller.control = fadeSwiper;