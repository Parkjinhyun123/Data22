const wrapper = document.querySelector('.wrapper')
const bokeh = document.createElement('span')
bokeh.classList.add('bokeh')
wrapper.append(bokeh)

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) +min)
}


const size = randomGenerator(50,120)

for(let i = 0; i < 50; i++){
    const bokeh = document.createElement('span')
    bokeh.classList.add('bokeh')
    bokeh.style.left =`${randomGenerator(0,100)}%`
    bokeh.style.top =`${randomGenerator(0,100)}%`
    bokeh.style.animationDuration =`${randomGenerator(10,20)}s`
    bokeh.style.animationDelay =`${randomGenerator(5,10)}s`
    bokeh.style.opacity = Math.random();
    bokeh.style.filter = `blur(${randomGenerator(1,3)}px)`
    bokeh.style.width = size + `px`
    bokeh.style.width = size + `px`
    bokeh.style.backgroundColor = `hsl(${randomGenerator(0,360)}, ${randomGenerator(50,60)}%, 50%)`
    wrapper.append(bokeh)
}

// const addBokeh= () => {
//     const bokeh = document.createElement('span')
//     bokeh.classList.add('bokeh')
//     bokeh.style.left =`${randomGenerator(0,100)}%`
//     bokeh.style.top =`${randomGenerator(0,100)}%`
//     bokeh.style.animationDuration =`${randomGenerator(10,20)}s`
//     bokeh.style.animationDelay =`${randomGenerator(5,10)}s`
//     bokeh.style.opacity = Math.random();
//     bokeh.style.filter = `blur(${randomGenerator(1,3)}px)`
//     bokeh.style.width = `${size}`
//     bokeh.style.width = `${size}`
//     bokeh.style.backgroundColor = `hsl(${randomGenerator(0,360)}, ${randomGenerator(50,60)}%, 50%)`
//     wrapper.append(bokeh)
// }

// for(let i = 0; i < 30, i++){
//     addBokeh()
// }