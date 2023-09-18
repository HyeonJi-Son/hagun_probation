// three-step-text-wrap 요소들을 선택합니다.
const stepTextWraps = document.querySelectorAll(".three-step-text-wrap");
const stepTexts = document.querySelectorAll(".three-steps-p");

for (let i = 0; i < stepTexts.length; i++) {
    stepTextWraps[i].addEventListener("mouseenter", () => {
        // 마우스가 요소에 진입했을 때 스타일 변경 (duration 0.5s, delay 0.5s 추가)
        stepTexts[i].style.transition = "color 0.5s 0.5s";
        stepTexts[i].style.color = "rgba(255, 255, 255, 0.5)";
    });

    stepTextWraps[i].addEventListener("mouseleave", () => {
        // 마우스가 요소에서 나갔을 때 스타일 원래대로 변경 (duration 0.5s, delay 0.5s 추가)
        stepTexts[i].style.transition = "color 0.5s 0.5s";
        stepTexts[i].style.color = "rgba(255, 255, 255, 1)";
    });
}

/* --------------------------------------------------------------------- */

// 1번째 및 2번째 three-steps-p 요소 가져오기
const firstStep = document.querySelector(".three-step-text-wrap:nth-child(1)");
const secondStep = document.querySelector(".three-step-text-wrap:nth-child(2)");

// 1번째 및 2번째 transparent-border-box 요소 가져오기
const firstBorder = document.querySelector(".transparent-border-box.first-white-border");
const secondBorder = document.querySelector(".transparent-border-box.second-white-border");

// 트랜지션을 적용할 스타일 추가
firstBorder.style.transition = "transform 0.5s ease-in-out";
secondBorder.style.transition = "transform 0.5s ease-in-out";

// 1번째 및 2번째 three-steps-p에 마우스 hover 이벤트 추가
firstStep.addEventListener("mouseenter", () => {
    // 1번째 요소에 hover 했을 때의 스타일 변경
    firstBorder.style.transform = "scaleX(1)";
});

firstStep.addEventListener("mouseleave", () => {
    // 1번째 요소에서 hover 벗어났을 때의 스타일 변경 (원래 스타일로 돌아감)
    firstBorder.style.transform = "scaleX(0)";
});

secondStep.addEventListener("mouseenter", () => {
    // 2번째 요소에 hover 했을 때의 스타일 변경
    secondBorder.style.transform = "scaleX(1)";
});

secondStep.addEventListener("mouseleave", () => {
    // 2번째 요소에서 hover 벗어났을 때의 스타일 변경 (원래 스타일로 돌아감)
    secondBorder.style.transform = "scaleX(0)";
});


/* --------------------------------------------------------------------- */


gsap.to(".three-step-text-wrap1", {
    scrollTrigger: {
        trigger: ".three-step-text-wrap1",
        markers: false,
        start: "top center",
        end: "bottom center",
        scrub: true,
        duration: 5,
        onEnter: function(){
            stepTexts[0].classList.add('active')
        }
    }
});

gsap.to(".three-step-text-wrap2", {
    scrollTrigger: {
        trigger: ".three-step-text-wrap2",
        markers: false,
        start: "top center",
        end: "bottom center",
        scrub: true,
        duration: 5,
        onEnter: function(){
            stepTexts[1].classList.add('active')
        }
    }
});

gsap.to(".three-step-text-wrap3", {
    scrollTrigger: {
        trigger: ".three-step-text-wrap3",
        markers: false,
        start: "top center",
        end: "bottom center",
        scrub: true,
        duration: 5,
        onEnter: function(){
            stepTexts[2].classList.add('active')
        }
    }
});