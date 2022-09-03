const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

input.addEventListener("input", (element) => {
    text.style.fontSize = `${element.currentTarget.value}px`;
});