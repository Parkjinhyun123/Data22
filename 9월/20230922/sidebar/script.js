const sidebar = document.getElementById('sidebar');
const trigger = document.querySelector('#trigger');
const overlay = document.querySelector('.overlay');

// getElementByid(): 아이디를 기반으로 DOM탐색
// DOM: Document Object Model (HTML구성요소)
// querySelector(): 태그, 아이디, 클래스등을 기반으로 단일요소 탐색
// qureySelectorAll():태그, 아이디, 클래스등을 기반으로 복수요소 탐색 - 유사 '배열' 형태로 결과변환

sidebar.addEventListener('click', ()=> {
    // classList: 해당요소에 클래스가 있는지 판단
    // classList.contains('클래스명') : "클래스명" 유무에따라 False,True 전환
    // classList.add('클래스명'): '클래스명' 추가
    // classList.remove('클래스명'): '클래스명' 제거
    // classList.toggle('클래스명'): 해당요소에 '클래스명'이 있는지에 따라 추가/제거
    // sidebar.classList.toggle('open')
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent = '열기'
    } else {
        sidebar.classList.add('open')
        overlay.classList.add('open')
        trigger.textContent = '닫기'
    }
})

overlay.addEventListener('click', ()=> {
    if(overlay.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent = '열기'
    }
})