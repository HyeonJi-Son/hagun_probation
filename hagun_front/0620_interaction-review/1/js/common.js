gsap.registerPlugin(ScrollTrigger);

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');

const inner1 = document.querySelector('.inner-box1');
const inner2s = document.querySelectorAll('.inner-box2');
const inner3s = document.querySelectorAll('.inner-box3');
const inner4 = document.querySelector('.inner-box4');

const btn1 = document.querySelector('.trigger1');
const btn2 = document.querySelector('.trigger2');
const btn3 = document.querySelector('.trigger3');
const btn4 = document.querySelector('.trigger4');
const btn5 = document.querySelector('.trigger5');
const btn6 = document.querySelector('.trigger6');
const btn7 = document.querySelector('.trigger7');
const btn8 = document.querySelector('.trigger8');
const btn9 = document.querySelector('.trigger9');
const btn10s = document.querySelectorAll('.trigger10');
const btn11s = document.querySelectorAll('.trigger11');
const btn12 = document.querySelector('.trigger12');
const btn13 = document.querySelector('.trigger13');



// box-wrap1
/* 버튼 클릭시 박스가 90도 회전 */
btn1.addEventListener("click", function(){
    box1.classList.add('active');
})


// box-wrap2
/* 버튼 클릭시 박스가 90도 회전 + 배경색 변경 */
btn2.addEventListener("click", function(){
    box2.classList.add('active');
})


// box-wrap3
/* 버튼 클릭시 박스가 90도 회전 + 배경색 변경을 토글로  */
btn3.addEventListener("click", function(){
    box3.classList.toggle('active');
})


// box-wrap4
/* active 클래스 <- 버튼4 누르면 추가, 버튼5 누르면 제거 */
btn4.addEventListener("click", function(){
    box4.classList.add('active');
})
btn5.addEventListener("click", function(){
    box4.classList.remove('active');
})

// box-wrap5
/* 마우스 오버 - 90도 회전 + 배경색 변경
*/
box5.addEventListener("mouseover", function(){
    box5.classList.add('active');
})
box5.addEventListener("mouseleave", function(){
    box5.classList.remove('active');
})


// box-wrap6
/*  버튼6 클릭시 - 우측으로 이동 + 배경색 변경
    버튼7 클릭시 - 초기화
    CSS설정 x, JS DOM style 인터렉션
*/
btn6.addEventListener("click", function(){
    box6.style.transform = "translateX(50px)";
    box6.style.backgroudColor = "red";
})
btn7.addEventListener("click", function(){
    box6.style.transform = "translateX(0px)";
    box6.style.backgroudColor = "transparnet";
})


// box-wrap7
/*  마우스 오버 - 우측으로 이동 + 배경색 변경
    오버x시 - 초기화
    CSS설정 x, JS DOM style 인터렉션
*/
box7.addEventListener("mouseover", function(){
    box7.style.transform = "translateX(50px)";
    box7.style.backgroudColor = "red";
})
box7.addEventListener("mouseleave", function(){
    box7.style.transform = "translateX(0px)";
    box7.style.backgroudColor = "transparnet";
})


// box-wrap8
/* 버튼8 클릭시 - 바깥박스 아래로 이동
                - 아래로 이동이 끝나면 안쪽 박스 우측으로 이동
    버튼9 클릭시 - 반대 순서로 초기화
    CSS설정 x, JS DOM style 인터렉션
*/
btn8.addEventListener("click", function(){
    box8.style.transform = "translateY(50px)";
    box8.addEventListener("transitionend", function(){
        inner1.style.transform = "translateX(50px)";
    }, {once: true})
})
btn9.addEventListener("click", function(){
    inner1.style.transform = "translateX(0px)";
    inner1.addEventListener("transitionend", function(){
        box8.style.transform = "translateY(0px)";
    }, {once: true})
})


// box-wrap9
/* 다섯개의 버튼 중 i번째 버튼을 클릭하면 해당버튼을 가진 inner-box2에 active class 토글링
*/
for(let i = 0; i <inner2s.length; i++){
    btn10s[i].addEventListener("click", function(){
        inner2s[i].classList.toggle('active');
    } )
}


// box-wrap10
/* i번째 버튼을 클릭했을 시, 버튼+박스가 짝수번째의 것이라면
    active 클래스를 토글링 한다.
    이 때, 0번 째는 작동하지 않는다.

querySelectorAll 배열 + 반복문 + 조건문 인터렉션 컨트롤
짝수 번째 inner-box 만 작동되도록
*/
for(let i = 0; i <inner3s.length; i++){
    if(i%2 != 0){
        btn11s[i].addEventListener("click", function(){
            inner3s[i].classList.toggle('active');
        } )
    }
}

// box-wrap11
/* 부모요소가 active를 가지면 자식요소도 인터렉션 컨트롤 */
// const inner4 = document.querySelector('.inner-box4');
btn12.addEventListener("click", function(){
    box9.classList.add('active');
})
btn13.addEventListener("click", function(){
    box9.classList.remove('active');
})


 
