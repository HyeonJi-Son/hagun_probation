
const chitahMainSwiper = new Swiper('.chitah-main-swiper', {
    //chitah-main-swiper로 이름을 변경한 이유:
        //지금은 메인만 제작하는 개별 프로젝트이므로 이름 중복의 가능성이 낮으나
        //홈페이지 하나를 만드는 경우엔 class명이 중복되어 코드가 꼬일 가능성이 높음.
        //미리미리 이름을 규칙에 맞춰 지정하는 습관을 들여야 함.
    //direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    effect: 'fade',
    speed: 1000,
    //spaceBetween: 100,
    navigation: {
        nextEl: '.chitah-main-swiper-button-next',
        prevEl: '.chitah-main-swiper-button-prev'
    },
    // on: {
    //     slideChange: 
    // }
  });