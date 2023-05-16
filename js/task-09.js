function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body')
const colorDisplay = document.querySelector('.color')
const colorChangeButton = document.querySelector('.change-color')

const colorChange = () => {
  colorDisplay.textContent = getRandomHexColor();
  body.style.backgroundColor=getRandomHexColor()
}

colorChangeButton.addEventListener("click", colorChange)