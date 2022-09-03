const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newArrayOfingredients = [];

const items = document.querySelector("#ingredients");

ingredients.forEach(element => {
  const item = document.createElement("li");
  item.classList.add("item")
  item.textContent = element;

  newArrayOfingredients.push(item);
})

items.prepend(...newArrayOfingredients);

console.log(items);