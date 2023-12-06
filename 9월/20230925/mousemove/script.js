const dot = document.querySelector('.dot')

window.addEventListener('mousemove',(event)=>{
    requestAnimationFrame (() => {
        mouseMove(event)
    })
})

const mouseMove = (event) => {
    dot.style.left = event.clientX -(dot.clientWidth /2)+ `px`;
    dot.style.top = event.clientY -(dot.clientHeight/2) + `px`;
} 

window.addEventListener('click', ()=>{
    const span = document.createElement('span')
    span.classList.add('bubble')
    dot.append(span)
    setTimeout(()=>{
        span.remove(span)
    }, 1000)
})