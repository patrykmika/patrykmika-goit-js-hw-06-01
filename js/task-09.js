function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColor = document.querySelector("body")
const setRandomColor = document.querySelector(".color")
const click = document.querySelector(".change-color");

click.addEventListener("click", (element) => {
  randomColor.style.backgroundColor = `${getRandomHexColor()}`;
  setRandomColor.textContent = `${getRandomHexColor()}`;
});