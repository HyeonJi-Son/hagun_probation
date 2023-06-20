const chitSwiper = new Swiper('.chit-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
          document.querySelector('.changing-index').innerHTML = `${this.realIndex+1}`;
        }
      }
  });