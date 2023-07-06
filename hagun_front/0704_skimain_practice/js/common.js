let checkDir;
function verticalOrHorizontal() {
  if(window.innerWidth < 768){
    checkDir = 'vertical';
  }else{
    checkDir = 'horizontal';
  }

  return checkDir;
}

const topSwiper = new Swiper('.top-swiper', {
  // Optional parameters
  direction: verticalOrHorizontal(),
  loop: false,
  slidesPerView: 4,
  spaceBetween: 10,
});

if(window.innerWidth > 768){

}else{

}

  gsap.to(".top-text", {
    scrollTrigger: {
      trigger: ".main-top-wrapper",
      markers: false,
      start: "top center",
      end: "5% center",
      scrub: true,
    },
    opacity: 0,
  })

  gsap.to(".bg-video", {
    scrollTrigger: {
      trigger: ".main-top-wrapper",
      start: "top center",
      end: "5% center",
      scrub: true,
    },
    filter: "blur(10px)",
  })

