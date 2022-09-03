
const nameIn = document.querySelector('input#name-input');
const nameOut = document.querySelector('span#name-output');

nameIn.addEventListener("input", (element) => {
    if (!element.currentTarget.value) nameOut.textContent = "Anonymous"
    else nameOut.textContent = element.currentTarget.value;
});