const arrayOfCategories = document.querySelector("#categories");

const arrayOfItems = arrayOfCategories.querySelectorAll(".item");

console.log(`Number of categories: ${arrayOfItems.length}`); 

arrayOfItems.forEach(element =>  {
    const categories = element.querySelector("h2");
    console.log(`Categories: ${categories.textContent}`)

    const items = element.querySelectorAll("li");
    console.log(`items: ${items.length}`);
})
