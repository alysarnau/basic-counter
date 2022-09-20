let counter = 0;
let counterSpan = document.getElementById('counter')
let subtractButton = document.getElementById('subtract')
let resetButton = document.getElementById('reset')
let addButton = document.getElementById('add')
let randomButton = document.getElementById('random')

counterSpan.innerText = `${counter}`

function randomizeMe() {
    let randomNum = Math.floor(Math.random() * 150)
    counter = randomNum;
    counterSpan.innerText = `${counter}`
    return counter
}

function countUp() {
    ++counter
    counterSpan.innerText = `${counter}`
    return counter
}
function countDown() {
    if (counter > 0) {
        --counter
    }
    counterSpan.innerText = `${counter}`
    return counter
}
function reset() {
    counter = 0
    counterSpan.innerText = `${counter}`
    return counter
}

addButton.addEventListener('click', countUp)
subtractButton.addEventListener('click', countDown)
resetButton.addEventListener('click', reset)
randomButton.addEventListener('click', randomizeMe)
