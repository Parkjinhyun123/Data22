// setTimeout(() => {
//     console.log('1번')
// },1000)
// setTimeout: 지연된 시간 후에 실행되는 함수
// setTimeout(함수,시간 1s: 1000ms)

// setTimeout(() => {
//     console.log('2번')
// },3000)

// setTimeout(() => {
//     console.log('3번')
// },500)

// setInterval(() => {
// 정해진 시간마다 반복 실행하는 비동기 함수
// setInterval(함수,시간)
//     console.log('$[time]마다 반복')
// }, 500);

// setTimeout(()=>{
//     console.log(index+1)
// }, 1000)

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'cyan'
// },1000)
let index = 0;
// setInterval(()=> {
//     document.body.style.backgroundColor = 'red'
// },50)

// setInterval(()=>{
//     document.body.style.backgroundColor ='green'
// },100)

setInterval(()=>{
    console.log(index++)
},1)