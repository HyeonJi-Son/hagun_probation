AOS.init();

const checkMediaSize = window.matchMedia(`(max-width: 768px)`)

const mainListSwiper = new Swiper('.main-list-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
  });

  // if(checkMediaSize <= 768){
  //   const mainListSwiper = new Swiper('.main-list-swiper', {
  //       // Optional parameters
  //       direction: 'vertical',
  //       loop: true,
  //       slidesPerView: 4,
  //       spaceBetween: 30,
    
  //       // Navigation arrows
  //       // navigation: {
  //       //   nextEl: '.swiper-button-next',
  //       //   prevEl: '.swiper-button-prev',
  //       // },
      
  //     });
      
  //     return mainListSwiper;
  // }else{
  //   const mainListSwiper = new Swiper('.main-list-swiper', {
  //       // Optional parameters
  //       direction: 'horizontal',
  //       loop: true,
  //       slidesPerView: 4,
  //       spaceBetween: 30,
    
  //       // Navigation arrows
  //       // navigation: {
  //       //   nextEl: '.swiper-button-next',
  //       //   prevEl: '.swiper-button-prev',
  //       // },
      
  //     });

  //     return mainListSwiper;
  // }



  gsap.to(".text-context", {
    scrollTrigger: {
        trigger: ".main-top-wrapper",
        // markers: flase,
        start: "top 40%",
        end: "14% 40%",
        scrub: true,
    },
    opacity: 0,

  })

  gsap.to(".bg-video", {
    scrollTrigger: {
        trigger: ".main-top-wrapper",
        markers: true,
        start: "top 40%",
        end: "14% 40%",
        scrub: true,
        duration: 2,
    },
    filter: "blur(10px)",

  })

// const main_bg = document.querySelector(".main-bg-wrapper");
// const text_cont = document.querySelector(".text-context");

// text_cont.addEventListener("transitionend", function() {
//     main_bg.style.filter = "blur(100%)";
// })

/*
1. 만약 slide_divs[i] 번 째에 mouseover라는 이벤트가 발생하는 경우
*/


const slide_divs = document.querySelectorAll(".swiper-slide");
const slide_imgs = document.querySelectorAll(".slide-img");

for(i = 0; slide_imgs.length < i; i++) {
    slide_divs[i].addEventListener("mouseover", function(){
        slide_imgs[i].style.filter = "opacity(100%)"
    })
}


