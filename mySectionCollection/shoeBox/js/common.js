const shoeboxSwiper = new Swiper('.shoebox-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4.5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
  });

  /*------------------------------*/


  //boxSlide 클래스에 클릭 이벤트가 일어나면 .shoebox-slide[i]의 하위 class 3개에 .active 가 추가된다.
    /*변화가 생기는 부분
    1. slide-name-warp.active : 컬러 변경
    2. slide-img-front.active : rotate 0 -> 90
    3. slide-img-back.active : rotate 90 -> 0
    */
  //그리고 다시 한 번 클릭하면 .active가 떨어지면서 다음과 같은 변화가 일어나야 한다.
      /*변화가 생기는 부분
    1. slide-name-warp.active : 원래대로
    2. slide-img-front.active :  rotate 90 -> 0
    3. slide-img-back.active : rotate 90 -> 0
    */

  const boxSlides = document.querySelectorAll('.shoebox-slide');
  const names = document.querySelectorAll('.slide-name');
  const imgFronts = document.querySelectorAll('.slide-img-front');
  const imgFrontBoxs = document.querySelectorAll('.img-front-box');
  const imgBacks = document.querySelectorAll('.slide-img-back');

for(let i = 0; i < boxSlides.length; i++){
  boxSlides[i].addEventListener("click", function(){
    if(names[i].classList.contains("active")) {
      //if active class exists, remove it
      names[i].classList.remove("active");
      imgBacks[i].classList.remove("active");

      imgBacks[i].addEventListener("transitionend", function(){
        imgFronts[i].classList.remove("active");
        imgFrontBoxs[i].classList.remove("active");
      }, {once: true});
    } else {
      //if active class does not exist, add it
      names[i].classList.add("active");
      imgFronts[i].classList.add("active");
      imgFrontBoxs[i].classList.add("active");

      imgFronts[i].addEventListener("transitionend", function(){
        imgBacks[i].classList.add("active");
      }, {once: true});
    }
  });
}


  //toggle로 하면 remove될 때 자연스러운 효과가 나오지 않으니
    //add 와 remove로 가보자. (active가 있으면 아래 코드가 바로 작동되어버림)
    //active 없는 쪽에도 trasform + transition 넣으면?
      //... 처음부터 transition 효과가 있는 것으로 나옴...
    //.shoebox-slide와 .active를 동시에 가진 boxSlide

  //   for(let i =0; i < boxSlides.length; i ++){ //remove
  //     boxSlides[i].addEventListener("click", function(){
  //       if(names[i].classList.contains("active")){
  //         names[i].classList.remove("active");
  //         imgBacks[i].classList.remove("active");

  //         imgBacks[i].addEventListener("transitionend", function(){
  //           imgFronts[i].classList.remove("active");
  //           imgFrontBoxs[i].classList.remove("active");
  //         }, {once: true})
  //       }
  //     });
  // }