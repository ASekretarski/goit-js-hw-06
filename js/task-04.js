const counterDisplay = document.querySelector('#value')
const decrementButton = document.querySelector('button[data-action="decrement"]')
const incrementButton = document.querySelector('button[data-action="increment"]')
let counterValue = 0
const decrementClick = () => {
    counterValue--;
    counterDisplay.textContent=counterValue
}
const incrementClick = () => {
    counterValue++;
    counterDisplay.textContent=counterValue
}
decrementButton.addEventListener("click", decrementClick)
incrementButton.addEventListener("click", incrementClick)

