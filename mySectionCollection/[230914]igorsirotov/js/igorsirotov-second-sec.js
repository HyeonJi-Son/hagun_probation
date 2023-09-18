  gsap.to(".ig-photo-img1", {
    scrollTrigger: {
      trigger: ".info-first",
      markers: false,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    scale: 1.1,
  })

  gsap.to(".ig-photo-img2", {
    scrollTrigger: {
      trigger: ".info-second",
      markers: false,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    scale: 1.1,
  })

  gsap.to(".ig-photo-img3", {
    scrollTrigger: {
      trigger: ".info-third",
      markers: false,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    scale: 1.1,
  })

  /* --------------------------------------------------------------------- */

  const igSecondTextFirst = document.querySelector(".ig-second-text-first");

  gsap.to(".igorsirotov-photo-info.info-blank", {
    scrollTrigger: {
        trigger: ".igorsirotov-photo-info.info-blank",
        markers: false,
        start: "top center",
        end: "23% center",
        scrub: true,
        duration: 5,
        onEnter: function(){
          igSecondTextFirst.classList.add('active')
        }
    }
});