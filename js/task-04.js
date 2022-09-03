const decrementButton = document.querySelector(`#counter>button[data-action="decrement"]`);
const incrementButton = document.querySelector(`#counter>button[data-action="increment"]`);
const counter = document.querySelector('#counter>#value');

let counterValue = 0;

decrementButton.addEventListener("click", () => counter.textContent = counterValue -= 1);
incrementButton.addEventListener("click", () => counter.textContent = counterValue += 1);