// phone-info-p, center-text-first, bottom-first-p 요소들을 선택합니다.
const elementsToHoverFirst = document.querySelectorAll(".top-mail-p, .phone-info-p, .center-text-first");

// 마우스 오버 이벤트를 처리합니다.
elementsToHoverFirst.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.classList.add("mouserhover-one"); // mouserhover 클래스 추가
    });

    element.addEventListener("mouseleave", () => {
        element.classList.remove("mouserhover-one"); // mouserhover 클래스 제거
    });
});

// phone-info-p, center-text-first, bottom-first-p 요소들을 선택합니다.
const elementsToHoverSecond = document.querySelectorAll(".center-text-second, .bottom-first-p");

// 마우스 오버 이벤트를 처리합니다.
elementsToHoverSecond.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.classList.add("mouserhover-two"); // mouserhover 클래스 추가
    });

    element.addEventListener("mouseleave", () => {
        element.classList.remove("mouserhover-two"); // mouserhover 클래스 제거
    });
});

  /* --------------------------------------------------------------------- */

  const centerText = document.querySelector(".center-text-first");

  gsap.to(".igorsirotov-fourth-sec", {
    scrollTrigger: {
        trigger: ".igorsirotov-fourth-sec",
        markers: false,
        start: "top center",
        end: "20% center",
        scrub: true,
        duration: 5,
        onEnter: function(){
            centerText.classList.add('active')
        }
    }
});
