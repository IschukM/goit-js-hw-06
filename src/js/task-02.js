const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeDish = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("item");

    return liEl;
    console.log(liEl);
  });
};
const ingredientsEl = document.querySelector("#ingredients");
const elements = makeDish(ingredients);
ingredientsEl.append(...elements);
