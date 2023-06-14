gsap.registerPlugin(ScrollTrigger);

// box-wrap1
const box1 = document.querySelector('.box1');
const btn1 = document.querySelector('.trigger1');

btn1.addEventListener("click", function(){
    box1.classList.add('active')
});

// box-wrap2
const box2 = document.querySelector('.box2');
const btn2 = document.querySelector('.trigger2');

btn2.addEventListener("click", function(){
    box2.classList.add('active')
});

// box-wrap3
const box3 = document.querySelector('.box3');
const btn3 = document.querySelector('.trigger3');

btn3.addEventListener("click", function(){
    box3.classList.toggle('active')
});

// box-wrap4
const box4 = document.querySelector('.box4');
const btn4 = document.querySelector('.trigger4');
const btn5 = document.querySelector('.trigger5');

btn4.addEventListener("click", function(){
    box4.classList.add('active')
});
btn5.addEventListener("click", function(){
    box4.classList.remove('active')
});


// box-wrap5
const box5 = document.querySelector('.box5');

box5.addEventListener("mouseover", function(){
    box5.classList.add('active');
});
box5.addEventListener("mouseleave", function(){
    box5.classList.remove('active');
});

// box-wrap6
const box6 = document.querySelector('.box6');
const btn6 = document.querySelector('.trigger6');
const btn7 = document.querySelector('.trigger7');

btn6.addEventListener("click", function(){
    box6.style.backgroundColor = "red";
    box6.style.transform = "translateX(50px)";
});
btn7.addEventListener("click", function(){
    box6.style.backgroundColor = "transparent";
    box6.style.transform = "translateX(0px)";
});


// box-wrap7
const box7 = document.querySelector('.box7');

box7.addEventListener("mouseover", function(){
    box7.style.backgroundColor = "red";
    box7.style.transform = "translateX(50px)";
});
box7.addEventListener("mouseleave", function(){
    box7.style.backgroundColor = "transparent";
    box7.style.transform = "translateX(0px)";
});
// box-wrap8
const box8 = document.querySelector('.box8');
const inner1 = document.querySelector('.inner-box1')
const btn8 = document.querySelector('.trigger8');
const btn9 = document.querySelector('.trigger9');

btn8.addEventListener("click", function(){
        //1. 큰 box가 아래로 이동
    box8.style.transform = "translateY(50px)";
        //2. 작은 box가 옆으로 이동
            //언제? 큰 box의 transition이 끝났을 때
    box8.addEventListener("transitionend", function(){
        inner1.style.transform = "translateX(50px)";
    })
});


// box-wrap9
const box2s = document.querySelectorAll('.inner-box2');
const btn10s = document.querySelectorAll('.trigger10');

/*
만약 i번째 버튼을 클릭하면 = 사용자가 클릭한 버튼의 인덱스 num이 i와 같을 때
i번째 박스만 작동하도록 만들어야한다.
->어떤 작동? active 클래스(90도 rotate + 배경색 변경)
*/

//내가 클릭한 버튼이 몇 번째인지 어떻게 알지?
    //하나의 버튼만 클릭 이벤트가 일어났으므로, 다른 버튼들로는 수신받은 클릭 이벤트가 없음!

    for(let i = 0; i < box2s.length ; i++){
        btn10s[i].addEventListener("click", function(){
            box2s[i].classList.toggle('active');
        })
    };

// box-wrap10
/*
querySelectorAll 배열 + 반복문 + 조건문 인터렉션 컨트롤
짝수 번째 inner-box 만 작동되도록
*/
const box3s = document.querySelectorAll('.inner-box3');
const btn11s = document.querySelectorAll('.trigger11');

//만약 사용자가 btn11s[i] 버튼을 클릭했을 시
//짝수번째 박스의 번호라면
//박스에 active 클래스를 붙여준다.

for(let i = 0; i < box3s.length; i++){
    if(i%2 != 0){ //짝수번째 박스인지 검증 = (홀수인덱스만 찾아라)
        btn11s[i].addEventListener("click", function(){
            box3s[i].classList.toggle('active');
        });
    } else if(i == 0){ //만약 i가 0인 경우는(홀수도 짝수도 아님)
        continue; // if문을 나가 반복문 마저 돌게 한다.
    }

    // btn11s[i].addEventListener("click", function(){
    //     //짝수번째 박스인지 검증 = (홀수인덱스만 찾아라)
    //     if(i%2 === 0){
    //         box3s[i].classList.toggle('active');
    //     }
    // })
}

// box-wrap11
const box9 = document.querySelector('.box9');
const btn12 = document.querySelector('.trigger12');
const btn13 = document.querySelector('.trigger13');

btn12.addEventListener("click", function(){
    box9.classList.add('active');
})

btn13.addEventListener("click", function(){
    box9.classList.remove('active');
})