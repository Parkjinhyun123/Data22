const dataList = document.querySelectorAll('[data-counter]')
const timer = document.querySelector('.span')
const dot = document.querySelector('.dot')

// for(let i = 0; i < dataList.length; i++){
//     const target = dataList[i].dataset.counter
//     const step =Math.floor(target/200) 
//     const timerText = dataList[i].querySelector('.timer')
//     let index = 0;
//     setInterval(()=> {
//         if(target > index){
//             index = index + step
//            timerText.textContent = index
//         } 
        
//     },10)
// }


dataList.forEach(item=> {
    const target = item.dataset.counter
    const timerText = item.querySelector('.timer')
    const step = Math.floor(target/200)
    let index = 0;
    setInterval(()=>{
        if(index < target){
            index = index + step
            timerText.textContent=index
        }
    })
})