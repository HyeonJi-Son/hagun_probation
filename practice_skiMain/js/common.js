gsap.registerPlugin(ScrollTrigger);

gsap.to(".sneak-main-vid-cover", {
    scrollTrigger: {
        trigger: ".sneak-main-swiper",
        markers: false,
        start: window.innerWidth > 768 ? "top 60%" : "top 70%",
        end: window.innerWidth > 768 ? "bottom 60%" : "100px 70%",
        scrub: true,
        duration: 5,
    },
    backdropFilter: "blur(40px)"
});

gsap.to(".sneak-main-titlewrap", {
    scrollTrigger: {
        trigger: ".sneak-main-section",
        markers: false,
        start: window.innerWidth > 768 ? "center 50%" : "18% 60%",
        end: window.innerWidth> 768 ? "center 50%" : "18% 60%",
        scrub: true,
        duration: 5,
    },
    // opacity: 0,
    filter: "blur(40px)",
  });
  


console.log(window.innerWidth)

window.addEventListener("scroll", function() {
    
})

window.onload = function () {
    
}