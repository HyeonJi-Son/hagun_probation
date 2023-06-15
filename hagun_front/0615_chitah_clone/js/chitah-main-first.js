const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // spaceBetween: 0,
    autoplay: {
        autoplay: false,
        delay:2000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on:{
        slideChange: function(){
            document.querySelector(".index").innerHTML=`${this.realIndex+1}`
        //---------------------------------  --------- ----------------------
        /*index class를 가진 요소 안에 포함된  HTML의    값을 재정의 해준다. 무엇으로? <- 
         */
        }
    }
  
    // on:{
    //     slideChange: function(){
    //         document.querySelector(".index").innerHTML=`${this.realIndex+1}`
    //     } 
    // }
  });

