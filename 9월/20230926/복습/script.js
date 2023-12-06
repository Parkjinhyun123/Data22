const tabItem = document.querySelectorAll('.tab-item')
const tabButton = document.querySelectorAll('.tab-button')
const tabContent = document.querySelectorAll('.tab-content')
console.log(tabItem)
console.log(tabButton)

// for(let i = 0; i < tabButton.length; i++ ){
//     tabButton[i].addEventListener('click', ()=> {
//         for(let j = 0; j < tabItem.length; j++ ){
//             tabItem[j].classList.remove('show')
//             tabButton[j].classList.remove('selected')
//         }
//         tabItem[i].classList.add('show')
//         tabButton[i].classList.add('selected')
//     })
// }

tabButton.forEach((button, index) => {
    button.addEventListener('click', ()=> {
        tabButton.forEach((item, idx) => { 
            item.classList.remove('seleted')
            tabItem[idx].classList.remove('show')
    })
        button.classList.add('selected')
        tabItem[index].classList.add('show')
    })
})
