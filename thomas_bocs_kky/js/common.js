{
    gsap.to(".new-vertical-one-swiper .new-vertical-pic-first-box", {
    scrollTrigger: {
        trigger: ".new-vertical-one-swiper",
        markers: false,
        start: "500px center",
        end: "bottom center",
        scrub: true,
    },
    y: `-150vh`,
    duration: 1,
    });
}
{
    gsap.to(".new-vertical-one-swiper .new-vertical-pic-sec-box", {
    scrollTrigger: {
        trigger: ".new-vertical-one-swiper",
        markers: false,
        start: "500px center",
        end: "bottom center",
        scrub: true,
    },
    y: `150vh`,
    duration: 1,
    });
}

{
    gsap.to(".new-vertical-two-swiper .new-vertical-pic-first-box", {
    scrollTrigger: {
        trigger: ".new-vertical-two-swiper",
        markers: false,
        start: "500px center",
        end: "bottom center",
        scrub: true,
    },
    y: `-150vh`,
    duration: 1,
    });
}
{
    gsap.to(".new-vertical-two-swiper .new-vertical-pic-sec-box", {
    scrollTrigger: {
        trigger: ".new-vertical-two-swiper",
        markers: false,
        start: "500px center",
        end: "bottom center",
        scrub: true,
    },
    y: `150vh`,
    duration: 1,
    });
}

{
    gsap.to(".new-vertical-three-swiper .new-vertical-pic-first-box", {
    scrollTrigger: {
        trigger: ".new-vertical-three-swiper",
        markers: false,
        start: "500px center",
        end: "bottom center",
        scrub: true,
    },
    y: `-150vh`,
    duration: 1,
    });
}
{
    gsap.to(".new-vertical-three-swiper .new-vertical-pic-sec-box", {
    scrollTrigger: {
        trigger: ".new-vertical-three-swiper",
        markers: false,
        start: "500px center",
        end: "bottom center",
        scrub: true,
    },
    y: `150vh`,
    duration: 1,
    });
}

{
    gsap.to(".new-vertical-four-swiper .new-vertical-pic-first-box", {
    scrollTrigger: {
        trigger: ".new-vertical-four-swiper",
        markers: false,
        start: "500px center",
        end: "bottom center",
        scrub: true,
    },
    y: `-150vh`,
    duration: 1,
    });
}
{
    gsap.to(".new-vertical-four-swiper .new-vertical-pic-sec-box", {
    scrollTrigger: {
        trigger: ".new-vertical-four-swiper",
        markers: false,
        start: "500px center",
        end: "bottom center",
        scrub: true,
    },
    y: `150vh`,
    duration: 1,
    });
}

// 텍스트 변경되는거
{
    gsap.to(".new-vertical-text-top-title:nth-of-type(1)", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "23% center",
        end: "25% center",
        scrub: true,
    },
    marginTop:"-170px",
    });
}
{
    gsap.to(".new-vertical-text-top-title:nth-of-type(2)", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "48% center",
        end: "50% center",
        scrub: true,
    },
    marginTop:"-170px",
    });
}
{
    gsap.to(".new-vertical-text-top-title:nth-of-type(3)", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "73% center",
        end: "75% center",
        scrub: true,
    },
    marginTop:"-170px",
    });
}

// 인덱스 숫자 변경되는거
{
    gsap.to(".new-vertical-text-index:nth-of-type(1)", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "23% center",
        end: "25% center",
        scrub: true,
    },
    marginTop:"-25px",
    });
}
{
    gsap.to(".new-vertical-text-index:nth-of-type(2)", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "48% center",
        end: "50% center",
        scrub: true,
    },
    marginTop:"-25px",
    });
}
{
    gsap.to(".new-vertical-text-index:nth-of-type(3)", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "73% center",
        end: "75% center",
        scrub: true,
    },
    marginTop:"-25px",
    });
}

// 인덱스 진행상황
{
    gsap.to(".new-vertical-var-white", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "0% top",
        end: "25% 25%",
        scrub: true,
    },
    width:"150px",
    });
}
const whiteVar = document.querySelector(".new-vertical-var-white");
whiteVar.style.width="0";
{
    gsap.to(".new-vertical-var-white", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "25% 25%",
        end: "50% 50%",
        scrub: true,
    },
    width:"150px",
    });
}
whiteVar.style.width="0";
{
    gsap.to(".new-vertical-var-white", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "50% 50%",
        end: "75% 75%",
        scrub: true,
    },
    width:"150px",
    });
}
whiteVar.style.width="0";
{
    gsap.to(".new-vertical-var-white", {
    scrollTrigger: {
        trigger: ".new-vertical-text-swiper-wrap",
        markers: false,
        start: "75% 75%",
        end: "100% 100%",
        scrub: true,
    },
    width:"150px",
    });
}

// 폰화면skew
{
    gsap.to(".new-vertical-skew-phone", {
    scrollTrigger: {
        trigger: ".new-vertical-four-swiper",
        markers: false,
        start: "30% center",
        end: "70% center",
        scrub: true,
    },
    transform: 'rotate3d(0, 0, 0, 0)',
    });
}