const login = document.querySelector(".login-form")

login.addEventListener("submit", (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    event.currentTarget.reset();

})