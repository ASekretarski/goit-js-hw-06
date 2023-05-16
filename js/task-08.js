const form = document.querySelector('.login-form')

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value==="") {
        alert('All fields must be filled, please.');
        return
    }
    const formData = {
        email: email.value,
        password: password.value
    }
    console.log(formData)
    event.currentTarget.reset()
}

form.addEventListener("submit", handleSubmit)
