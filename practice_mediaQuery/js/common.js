$(function() {
    const chitMainPagi = document.querySelector('.chit-main-pagi')
    const chitMainSwiperVid = document.querySelectorAll('.chit-main-swiper-img')

    
    const chitMainSwiper = new Swiper('.chit-main-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        effect: 'fade',
        speed: 1000,
        navigation: {
            nextEl: '.chit-main-swiper-next',
            prevEl: '.chit-main-swiper-prev'
        },
        on: {
            slideChange: function () {
                chitMainPagi.innerText = `${this.realIndex + 1}`;
                for(let i = 0; i < chitMainSwiperVid.length; i++){
                    chitMainSwiperVid[i].pause()
                }
                chitMainSwiperVid[this.realIndex].play()
            }
        }
    });
})


// anymb-header-section 시작

const anymbHeader = document.querySelector('.anymb-header-section')

ScrollTrigger.create({
    trigger: "body",
    markers: false,
    start: "100px top",
    end: "bottom top",
    onUpdate: self => {
        const scrollTop = self.scroll()
        const direction = self.direction;
        if (direction > 0) {
            anymbHeader.style.transform = 'translate(0, -100%)'
        } else if (direction < 0) {
            anymbHeader.style.transform = 'translate(0, 0)'
        }
    }
});

gsap.to("body", {
    scrollTrigger: {
        trigger: "body",
        markers: false,
        start: "10px top",
        end: "10px top",
        scrub: true,
        onLeave: function(){
            anymbHeader.classList.add('active')
        },
        onEnterBack: function(){
            anymbHeader.classList.remove('active')
        }
    }
});


// anymb-header-section 끝





 // anymb-greetings-section 시작


 gsap.to(".anymb-greetings-img", {
  scrollTrigger: {
      trigger: ".anymb-greetings-visualwrap",
      markers: false,
      start: "top 40%",
      end: "top 40%",
      // start: window.innerWidth > 475 ? "top 70%" : "top 80%",
      // end: window.innerWidth> 475 ? "bottom 70%" : "top 72%",
      scrub: true,
      duration: 5,
  },
  scale: 1
});







const largeText = document.querySelector('.anymb-greetings-largetext')

gsap.to(".anymb-greetings-visualwrap", {
  scrollTrigger: {
      trigger: ".anymb-greetings-visualwrap",
      markers: false,
      start: "65% center",
      end: "65% 40%",
      scrub: true,
      onEnter: function () {
          largeText.classList.add('active');
      },
      onEnterBack: function () {
          largeText.classList.add('active')
      },
      // onLeave: function () {
      //     largeText.classList.remove('active')
      // },
      onLeaveBack: function () {
          largeText.classList.remove('active')
      }
  }
});





const smallText = document.querySelector('.anymb-greetings-smalltext')

gsap.to(".anymb-greetings-visualwrap", {
  scrollTrigger: {
      trigger: ".anymb-greetings-visualwrap",
      markers: false,
      start: "75% center",
      end: "75% 40%",
      scrub: true,
      onEnter: function () {
          smallText.classList.add('active');
      },
      onEnterBack: function () {
          smallText.classList.add('active')
      },
      // onLeave: function () {
      //     largeText.classList.remove('active')
      // },
      onLeaveBack: function () {
          smallText.classList.remove('active')
      }
  }
});




const greetingsButton = document.querySelector('.anymb-greetings-button')

gsap.to(".anymb-greetings-visualwrap", {
  scrollTrigger: {
      trigger: ".anymb-greetings-visualwrap",
      markers: false,
      start: "85% center",
      end: "85% 40%",
      scrub: true,
      onEnter: function () {
          greetingsButton.classList.add('active');
      },
      onEnterBack: function () {
          greetingsButton.classList.add('active')
      },
      // onLeave: function () {
      //     largeText.classList.remove('active')
      // },
      onLeaveBack: function () {
          greetingsButton.classList.remove('active')
      }
  }
});


 // anymb-greetings-section 끝


// anymb-product-scrollx 시작



const anyMbProductInner = document.querySelector('.anymb-product-inner')
gsap.to(".anymb-product-inner", {
    scrollTrigger: {
        trigger: ".anymb-product-scrollx",
        markers: false,
        start: "top top",
        end: "bottom bottom",
        // start: window.innerWidth > 475 ? "top 70%" : "top 80%",
        // end: window.innerWidth> 475 ? "bottom 70%" : "top 72%",
        scrub: true,
        duration: 5,
    },
    x: '-72%'

});


const innerStroke = document.querySelector('.anymb-product-scrollx')
const itemStroke = document.querySelectorAll('.anymb-product-item')

gsap.to(".anymb-product-scrollx", {
    scrollTrigger: {
        trigger: ".anymb-product-scrollx",
        markers: false,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: function () {
            innerStroke.classList.add('active');
            for (let i = 0; i < itemStroke.length; i++) {
                itemStroke[i].classList.add('active');
            }
        },
        onLeaveBack: function () {
            innerStroke.classList.remove('active')
            for (let i = 0; i < itemStroke.length; i++) {
                itemStroke[i].classList.remove('active');
            }
        }
    }
});


const productTitlewrap = document.querySelector('.anymb-product-titlewrap')

gsap.to(".anymb-product-titlewrap", {
    scrollTrigger: {
        trigger: ".anymb-product-scrollx",
        markers: false,
        start: "top 18%",
        end: "bottom 18%",
        scrub: true,
        onEnter: function () {
            productTitlewrap.classList.add('active');
        },
        onEnterBack: function () {
            productTitlewrap.classList.add('active')
        },
        // onLeave: function () {
        //     largeText.classList.remove('active')
        // },
        onLeaveBack: function () {
            productTitlewrap.classList.remove('active')
        }
    }
});


const subTitlewrap1 = document.querySelector('.subtitlewrap1')

gsap.to(".anymb-product-titlewrap", {
    scrollTrigger: {
        trigger: ".anymb-product-scrollx",
        markers: false,
        start: "100px 18%",
        end: "100px 18%",
        scrub: true,
        onEnter: function () {
            subTitlewrap1.classList.add('active');
        },
        onEnterBack: function () {
            subTitlewrap1.classList.add('active')
        },
        // onLeave: function () {
        //     largeText.classList.remove('active')
        // },
        onLeaveBack: function () {
            subTitlewrap1.classList.remove('active')
        }
    }
});


const subTitlewrap2 = document.querySelector('.subtitlewrap2')

gsap.to(".anymb-product-titlewrap", {
    scrollTrigger: {
        trigger: ".anymb-product-scrollx",
        markers: false,
        start: "420px 18%",
        end: "420px 18%",
        scrub: true,
        onEnter: function () {
            subTitlewrap2.classList.add('active');
        },
        onEnterBack: function () {
            subTitlewrap2.classList.add('active')
        },
        // onLeave: function () {
        //     largeText.classList.remove('active')
        // },
        onLeaveBack: function () {
            subTitlewrap2.classList.remove('active')
        }
    }
});


// anymb-product-scrollx 끝



