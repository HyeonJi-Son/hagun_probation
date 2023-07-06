/* sneak-top-swiper 시작------------------ */
function verOrHorz(){
  let checkDir;

  if(window.innerWidth > 768){
    checkDir = 'horizontal';
  }else{
    checkDir = 'vertical';
  }

  return checkDir;
}

const sneakSwiper = new Swiper('.sneak-top-swiper', {
  // Optional parameters
  direction: verOrHorz(),
  loop: false,
  slidesPerView: 4,
  spaceBetween: 10,


});
/* sneak-top-swiper 끝------------------ */

/* top-text (스크롤 올리면 사라짐) 시작------------------ */
gsap.to(".top-text", {
  scrollTrigger: {
    trigger: ".top-text-wrapper",
    markers: true,
    start: "top 46%",
    end: "30% center",
    scrub: true,
    duration: 5,
  },
  filter: "opacity(0)",
});
/* top-text (스크롤 올리면 사라짐) 끝------------------ */

/* sneak-bg-wrapper (스크롤 올리면 배경 흐려짐) 시작------------------ */
gsap.to(".sneak-bg-wrapper", {
  scrollTrigger: {
    trigger: ".top-text-wrapper",
    start: "top center",
    end: "11% center",
    scrub: true,
  },
  filter: "blur(10px)",
});
/* sneak-bg-wrapper (스크롤 올리면 배경 흐려짐) 끝------------------ */