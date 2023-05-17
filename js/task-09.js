function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body')
const colorDisplay = document.querySelector('.color')
const colorChangeButton = document.querySelector('.change-color')


const colorChange = () => {
  const color = getRandomHexColor()
  colorDisplay.textContent = color;
  body.style.backgroundColor = color;
}

colorChangeButton.addEventListener("click", colorChange)