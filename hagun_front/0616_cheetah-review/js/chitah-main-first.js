gsap.registerPlugin(ScrollTrigger);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        autoplay: true,
        delay: 2000,
    },
    spaceBetween: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
        slideChange: function(){
            document.querySelector('.index').innerHTML = `${this.realIndex}`;
        }
    }
  });