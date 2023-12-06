const li = document.querySelectorAll('li')
const button = document.getElementById('generate')

function randomNumnber(min, max){
    return Math.floor(Math.random() * (max - min +1) +min)
}

let lottoNumber = [];

// lottoNumber.push(randomNumnber(1,45))

// for(let i; lottoNumber.length < 6; i++ ){
//     const random = randomNumnber(1,45)
//     // random 변수에 난수 생성한 값 할당
//     const isEntry = lottoNumber.includes(random)
//     // lottoNumber 내부에 random과 일치하는 값이 있는지 true/false
//     !isEntry ? lottoNumber.push(random) : ''
//     // !(not) 값을 뒤집어 준다. true=> false, false => true
// //     if(!isEntry)
// //         lottoNumber.push(randomNumnber(1,45))
// }

let timer = 300

button.addEventListener('click', () => {
    button.classList.add('processing')
    button.textContent = '번호 생성중'
    if(lottoNumber.length > 0){
        lottoNumber = [];
    }
    for(let i = 0; lottoNumber.length < 6; i++ ){
        const random = randomNumnber(1,45)
        const isEntry = lottoNumber.includes(random)
        !isEntry ? lottoNumber.push(random) : ''
    }
    
    lottoNumber = lottoNumber.sort((a, b) => a - b)

    for(let i = 0; i <lottoNumber.length; i++){
    
        setTimeout(() => {
            li[i].textContent = lottoNumber[i]
    }, timer * i)
  }
  setTimeout(()=> {
    button.classList.remove('processing')
    button.textContent = '로또번호생성'
  }, timer * lottoNumber.length)
})