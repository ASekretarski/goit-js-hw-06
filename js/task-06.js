const input = document.querySelector('#validation-input')
const requiredLength = input.getAttribute("data-length")
const validateLength = () => {
    if (input.value.length === Number(requiredLength)) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    } else {
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
}
input.addEventListener("blur", validateLength)