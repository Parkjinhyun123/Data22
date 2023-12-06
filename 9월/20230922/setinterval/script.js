const counter = document.getElementById('counter')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

let index = 0;

let timerId;

startBtn.addEventListener('click', () => {
    if(timerId){
        // 만약 timerid에 값이 들어있다면
        clearInterval(timerId)
        // setInterval 함수 취소
    }

    timerId = setInterval(() => {
        index++
        // index값증가
        console.log(index)
        counter.textContent = index
        // 증가된 index값을 counter내용으로 할당
    }, 100);
})

stopBtn.addEventListener('click', ()=>{
    clearInterval(timerId)
})

resetBtn.addEventListener('click', ()=>{
    clearTimeout(timerId)
    index = 0;
    counter.textContent = index
})
