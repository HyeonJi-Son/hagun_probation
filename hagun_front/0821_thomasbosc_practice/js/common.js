const scrollWraps = document.querySelectorAll('.thomas-bosc-scroll-wrap');

gsap.to(".thomas-main-title", {
    scrollTrigger: {
      trigger: ".thomas-bosc-scroll-wrap",
      markers: true,
      start: "center center",
      end: "100% center",
      scrub: true,
    },
    //
  })

gsap.to(".imgs-right", {
    yPercent: -60, // 위로 60%만큼 움직이도록 설정
    scrollTrigger: {
      trigger: ".thomas-bosc-scroll-wrap", // i번째 scrollWraps 여야 할텐데...
      markers: true,
      start: "center center",
      end: "100% center",
      scrub: true,
    },
  })
gsap.to(".imgs-left", {
    scrollTrigger: {
      trigger: ".thomas-bosc-scroll-wrap",
      markers: true,
      start: "center center",
      end: "100% center",
      scrub: true,
    },
    yPercent: 60, 
    //스크롤이 내려가는 동안 imgs-left div는 아래에서 위로 이동하도록 설정.
  })

//   ----------

gsap.to(".imgs-right", {
    yPercent: -60, // 위로 60%만큼 움직이도록 설정
    scrollTrigger: {
      trigger: ".thomas-bosc-scroll-wrap.second", // i번째 scrollWraps 여야 할텐데...
      markers: true,
      start: "center center",
      end: "100% center",
      scrub: true,
    },
  })
gsap.to(".imgs-left", {
    scrollTrigger: {
      trigger: ".thomas-bosc-scroll-wrap.second",
      markers: true,
      start: "center center",
      end: "100% center",
      scrub: true,
    },
    yPercent: 60, 
    //스크롤이 내려가는 동안 imgs-left div는 아래에서 위로 이동하도록 설정.
  })

gsap.to(".gage-thick", {
    scrollTrigger: {
      trigger: ".thomas-bosc-scroll-wrap",
      markers: true,
      start: "center center",
      end: "100% center",
      scrub: true,
    },
    width: 250, // 스크롤이 end까지 닿으면 .gage-thick의 width가 250px로 변화합니다.
    //스크롤이 end까지 닿으면 gage-thick의 width가 250px가 되도록 한다.
  })

//   gsap.to(".bg-video", {
//     scrollTrigger: {
//       trigger: ".main-top-wrapper",
//       start: "top center",
//       end: "5% center",
//       scrub: true,
//     },
//     filter: "blur(10px)",
//   })
