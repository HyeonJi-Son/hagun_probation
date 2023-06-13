//1번
const box1 = document.querySelector('.box1');
const box1btn = document.querySelector('.box1btn');

box1btn.addEventListener("click", function(){
    box1.classList.add('active');
})

//2번
const box2 = document.querySelector('.box2');
const box2btn = document.querySelector('.box2btn');
const box2Text = document.querySelector('.box2-text');

box2btn.addEventListener("click", function(){
    box2.classList.add('active');
    box2Text.classList.add('active');
})

//3번
const box3 = document.querySelector('.box3');
const box3btn = document.querySelector('.box3btn');

box3btn.addEventListener("click", function(){
    box3.classList.toggle('active');
})

//4번
const box4 = document.querySelector('.box4');
const box4btn = document.querySelector('.box4btn');

box4btn.addEventListener("click", function(){
    box4.classList.toggle('active');
})

//5번
const box5 = document.querySelector('.box5');
const box5btn = document.querySelector('.box5btn');

// let check1 = box5.classList.contains('active1');
// let check2 = box5.classList.contains('active2');

box5btn.addEventListener("click", function(){
    let check1 = box5.classList.contains('active1');
    let check2 = box5.classList.contains('active2');

    if(!check1 && !check2){
        box5.classList.add('active1');
    } else if(check1 && !check2){
        box5.classList.replace('active1', 'active2');
    } else {
        box5.classList.remove('active2');
    };  
}) //솔루션2 대로 수정한 내용

// 최초에 내가 완성한 내용
//box5btn.addEventListener("click", function(){
//     if(!check1 && !check2){
//         box5.classList.add('active1');
//         check1 = box5.classList.contains('active1');
//     } else if(check1 && !check2){
//         box5.classList.replace('active1', 'active2');
//         check2 = box5.classList.contains('active2');
//     } else {
//         box5.classList.remove('active2');
//         check1 = box5.classList.contains('active1');
//         check2 = box5.classList.contains('active2');
//     };  
// })

/*
오늘 5번 문제 진행하면서 헤맨 이유:
- 상단의 let check1, check2값이 "click" 이벤트 후 classList.add로 인해
  변경될 것으로 생각했지만 다시 구해지지 않음.

  솔루션 1. classList.add 동작이 이뤄진 후, check1과 check2의 값을 다시 구해준다.
  솔루션 2. click 이벤트 발생 시, 안에서 check1과 check2의 값을 구할 수 있다면 더 효율적일 것.

*/