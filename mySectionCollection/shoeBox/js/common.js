const shoeboxSwiper = new Swiper('.shoebox-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4.5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
  });