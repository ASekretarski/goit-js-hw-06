function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')
const amountOfBoxes = document.querySelector('input')
const placeForBoxes = document.querySelector('#boxes')

function createBoxes(amount) {
  amount=amountOfBoxes.value
  let size = 20;
  for (let i = 0; i < amount; i++){
    size += 10;
    placeForBoxes.insertAdjacentHTML("beforeend", `<div style="height: ${size}px; width: ${size}px;background-color: ${getRandomHexColor()}"></div>`)
  }
}
function destroyBoxes() {
  placeForBoxes.innerHTML=''
}

createButton.addEventListener("click", createBoxes)
destroyButton.addEventListener("click", destroyBoxes)