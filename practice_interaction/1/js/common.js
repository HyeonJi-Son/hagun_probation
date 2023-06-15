gsap.registerPlugin(ScrollTrigger);



// box-wrap1
const box1 = document.querySelector('.box1')
const trigger1 = document.querySelector('.trigger1')

// gsap.to(".box1", {
//     scrollTrigger: {
//       trigger: ".box-wrap box-wrap1",
//       markers: false,
//       start: "top 90%",
//       end: "bottom 90%",
//       scrub: true,
//       duration: 5,
//     },
//     x: "0",
//     opacity: 1,
// });

trigger1.addEventListener("click", function() {
    /* trigger1이라는 이벤트를 등록한다.
        - 클릭시, 기능이 동작한다.
            //classList가 뭐지? 등록되어있는 모든 클래스의 List?
    
        ↓ classList중 box1에 active를 추가한다?
        active가 되면 box1이라는 class를 classList에 추가한다?
        (맞는 해석)
        -> box1의 classList에 active class를 추가한다.
        -> .box1.active class를 가진 css는 box를 90도 돌리는 속성을 갖고 있다. 
    */
    box1.classList.add('active')
    /* 왜 한 번 밖에 실행되지 않을까? 90도 돌아가는 건 만들 방법이 있을 것 같은데?
        - 만약 내가 반복문으로 box1-i가 매번 add되게 만들면 중복될 class가 없으니까 계속 돌아갈까?
        - active가 한번 add되고나면 classList에 중복되는 class가 등록되지 않는다...?
            -> 누를 때마다 90도씩 돌아가게 하는 방법!
             if 조건문을 만들어서 .active1~4가 add됨에 따라 90/180/270/360도 box가 돌아간 css를 적용.
             이때 각 조건문에 따라 실행되는 내용에 이전에 작동한 class도 삭제하는 것을 잊지 않아야 꼬임이 없다.
    */
})
// box-wrap1

// box-wrap2
const box2 = document.querySelector('.box2')
const trigger2 = document.querySelector('.trigger2')

trigger2.addEventListener("click", function() {
    box2.classList.add('active')
})
// box-wrap2

// box-wrap3
const box3 = document.querySelector('.box3')
const trigger3 = document.querySelector('.trigger3')

trigger3.addEventListener("click", function() {
    box3.classList.toggle('active')
})
// box-wrap3

// box-wrap4
const box4 = document.querySelector('.box4')
const trigger4 = document.querySelector('.trigger4')
const trigger5 = document.querySelector('.trigger5')

trigger4.addEventListener("click", function() {
    box4.classList.add('active')
})
trigger5.addEventListener("click", function() {
    box4.classList.remove('active')
})
// box-wrap4

// box-wrap5
const box5 = document.querySelector('.box5')

box5.addEventListener("mouseover", function() {
    box5.classList.add('active')
})
box5.addEventListener("mouseleave", function() {
    box5.classList.remove('active')
})
// box-wrap5

// box-wrap6
const box6 = document.querySelector('.box6')
const trigger6 = document.querySelector('.trigger6')
const trigger7 = document.querySelector('.trigger7')

trigger6.addEventListener("click", function() {
    box6.style.backgroundColor = "red"
    box6.style.transform = "translateX(50px)"
})
trigger7.addEventListener("click", function() {
    box6.style.backgroundColor = "transparent"
    box6.style.transform = "translateX(0)"
})
// box-wrap6

// box-wrap7
const box7 = document.querySelector('.box7')

box7.addEventListener("mouseover", function() {
    box7.style.backgroundColor = "red"
    box7.style.transform = "translateX(50px)"
})
box7.addEventListener("mouseleave", function() {
    box7.style.backgroundColor = "transparent"
    box7.style.transform = "translateX(0)"
})
// box-wrap7

// box-wrap8
const box8 = document.querySelector('.box8')
const innerBox1 = document.querySelector('.inner-box1')
const trigger8 = document.querySelector('.trigger8')
const trigger9 = document.querySelector('.trigger9')

trigger8.addEventListener("click", function() {
    box8.style.transform = "translateY(50px)"
    box8.addEventListener('transitionend', function(){
        innerBox1.style.transform = "translateX(50px)"
    }, {once: true})
})
//** transitionend 사용할 시 {once: true} 는 필수, 없을시 이벤트 반복되어 망가진다 */
trigger9.addEventListener("click", function() {
    innerBox1.style.transform = "translateX(0)"
    innerBox1.addEventListener('transitionend', function(){
        box8.style.transform = "translateY(0)"
    }, {once: true})
})
// box-wrap8

// box-wrap9
const innerBox2 = document.querySelectorAll('.inner-box2')
const trigger10 = document.querySelectorAll('.trigger10')
//querySelectorAll <- 값이 여러개면 NodeList에 저장하여 List형태로 보여준다.

for(let i = 0; i < innerBox2.length; i++) {
    //만약 i = 0이고, i의 값이 innerBox2의 길이보다 작을 때 반복되는 for문은
    trigger10[i].addEventListener("click", function() {
    //trigger10 List의 i번째 태그에 클릭 이라는 이벤트가 발생했을때
    //innerBox2의 i번째 인덱스가 가진 class목록에 active 라는 클래스를
        //없으면 넣고, 있으면 빼는 함수를 실행한다.
        innerBox2[i].classList.toggle('active')
    })
}
// box-wrap9

// box-wrap10
const innerBox3 = document.querySelectorAll('.inner-box3')
const trigger11 = document.querySelectorAll('.trigger11')

for(let i = 1; i <= innerBox3.length; i++) {
//만약 i가 1이고, i의 값이 innerBox3의 길이보다 크거나 같을 때 반복되는 for문은
    if(i % 2 === 0){
    //만약 i를 2로 나눈 값이 0과 같다면
        trigger11[i-1].addEventListener("click", function() {
            //trigger11의 i-1번째 태그에 클릭 이벤트가 발생했을 때
            innerBox3[i-1].classList.toggle('active')
            //innerBox3[i-1]번째 태그의 클래스 목록에 active클래스를 토글링 해준다.
        })
    }
}
// box-wrap10
box

// box-wrap11
const box9 = document.querySelector('.box9')
const trigger12 = document.querySelector('.trigger12')
const trigger13 = document.querySelector('.trigger13')

trigger12.addEventListener("click", function() {
    box9.classList.add('active')
})
trigger13.addEventListener("click", function() {
    box9.classList.remove('active')
})
// box-wrap11
