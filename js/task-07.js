const sizeInput = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
const fontSizeChange = () => {
    text.style.fontSize=`${sizeInput.value}px`
}
sizeInput.addEventListener("input", fontSizeChange)