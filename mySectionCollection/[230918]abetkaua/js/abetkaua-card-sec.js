//** 텍스트 슬라이드 시작 */
const coverSlideBackTextWrapList = document.querySelectorAll('.cover-sldie-back-text-wrap');
const coverSlideBackTextList = document.querySelectorAll('.cover-sldie-back-text');
const coverSlideSpeed = 2;

function coverSildeBack() {
  for (let i = 0; i < coverSlideBackTextWrapList.length; i++) {
    let coverSlidePosition = parseFloat(getComputedStyle(coverSlideBackTextWrapList[i]).left) || 0;
    coverSlidePosition -= coverSlideSpeed;
    if (coverSlidePosition < -coverSlideBackTextList[i].offsetWidth) {
      coverSlidePosition = 0;
    }
    coverSlideBackTextWrapList[i].style.left = coverSlidePosition + 'px';
  }
  requestAnimationFrame(coverSildeBack);
}

coverSildeBack();
//** 텍스트 슬라이드 끝 */