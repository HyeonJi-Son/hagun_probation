gsap.to(".igorsirotov-text-wrap", {
    scrollTrigger: {
      trigger: ".igorsirotov-first-sec",
      markers: false,
      start: "center center",
      end: "80% center",
      scrub: true,
    }, opacity: 0,
  })