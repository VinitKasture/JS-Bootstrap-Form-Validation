let form = document.getElementById("registrationForm");
let submitBtn = document.getElementById("submitBtn");

function setError(errorType, errorMessage) {
    let error = document.getElementById("error");
    let errorComp = "";

    errorComp = `<div class="alert alert-${errorType} alert-dismissible fade show" role="alert">
                    <strong>${errorMessage}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
    error.innerHTML += errorComp;
}

if (setError.innerHTML !== null) {
    setInterval(() => {
        error.innerHTML = "";
    }, 5000);
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let errorArr = []
    if (firstName.value.length < 3) {
        setError("danger", "First Name is too short");
        errorArr.push(setError)
    }
    if (lastName.value.length < 3) {
        setError("danger", "Last Name is too short");
        errorArr.push(setError)
    }
    if (lastName.value.length > 15) {
        setError("danger", "Last Name is too long");
        errorArr.push(setError)
    }
    if (firstName.value.length > 15) {
        setError("danger", "First Name is too long");
        errorArr.push(setError)
    }
    let password = document.getElementById("password");
    if (password.value.length < 8) {
        setError("danger", "Password is too short");
        errorArr.push(setError)
    }
    if (password.value.length > 20) {
        setError("danger", "Password is too long");
        errorArr.push(setError)
    }
    let email = document.getElementById("email");
    if (email.value.length < 5) {
        setError("danger", "Enter a valid email");
        errorArr.push(setError)
    }
    if (email.value.length > 20) {
        setError("danger", "Email is too long");
        errorArr.push(setError)
    }
    if (errorArr.length == 0) {
        e.preventDefault()
        setError("success", "Form submitted successfully");
        form.reset();
    }
})
