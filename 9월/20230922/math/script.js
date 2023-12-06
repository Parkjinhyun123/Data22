// PI
console.log(Math.PI)

//절대값
console.log(Math.abs(-1))
console.log(Math.abs(1))
console.log(Math.abs('-1'))

// 반올림
console.log(Math.round(1.7))
console.log(Math.round(1.3))

// 올림
console.log(Math.ceil(1.2))
console.log(Math.ceil(-1.2))

// 버림
console.log(Math.floor(1.23333333333333))

// 랜덤
// console.log(Math.random())
// console.log(Math.random()*(100 - 10 +1) + 10)

let max = 45;
let min = 1;
const random = Math.floor(Math.random() * (max - min +1) +min)
console.log(random)

const randomGenerator= (min,max) => {
    // 최대,최소값을 받아 난수를 생성하는 함수
    return console.log(Math.floor(Math.random() * (max - min +1) +min))
}
randomGenerator(1,10)