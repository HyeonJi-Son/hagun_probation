/* $는 변수 값이 태그임을 알려주는 팀장님만의 규칙! */

const $body = document.querySelector('body');
// body 태그의 값을 받아옴. 즉 body 내에 있는 모든 요소를 확인할 수 있을 것임.
// body 전체를 받아오면 사용자가 그 내용 자체를 변경시킬 일은 없으니 괜찮겠구나.
let active = false;

$body.addEventListener('click', (e) => {
  /* 인자로 받아오는 e가 뭐지?? event?
  body에 eventListener를 추가.
   click 이벤트가 일어날 때 마다
  */
  const $button =  e.target.closest('button')
  // button 태그의 태그만을 $button 상수에 담김.
    //body의 태그를 모두 확인할 수 있지만, 위의 코드로 인해
    //button이 아닌 태그는 undefined 로 확인됨.
      //body에서 사용자가 클릭한 부분의 태그가 저장된 상수?


  if($button) { //만약에 button 태그가 있을 때
    const index = $button.dataset.idx;
    // index = dataset의 idx의 button 태그
    const target = document.querySelector(`[data-idx="${index}"]`);

    if (index === '5' && active) {
      target.classList.add('active2');
    }else if(index === '5' && !active) {
      active = true
      target.classList.add('active');
    }else if(index === '4' || index === '3') {
      target.classList.toggle('active');
    }else {
      target.classList.add('active');
    }
  }
});
