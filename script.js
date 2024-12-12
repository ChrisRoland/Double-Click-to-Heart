const loveMe = document.querySelector(".loveMe")
const times = document.querySelector("#times")

let clickTime = 0
times.innerText = 0

loveMe.addEventListener("dblclick", (e) => {
            showHeart(e)
            clickTime = 0
})

const showHeart = (e) => {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerText++

    setTimeout(() => heart.remove(), 500)
}

//Custom double click event XD
// loveMe.addEventListener("click", (e) => {
//     const time = new Date().getTime()
//     if(clickTime === 0) {
//         clickTime = time
//     } else {
//         if((time - clickTime) < 800) {
//             showHeart(e)
//             clickTime = 0
//         } else {
//             clickTime = time
//         }
//     }
// })