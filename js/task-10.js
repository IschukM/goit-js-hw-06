function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  let markup = "";
  for (let i = 0; i < amount; i++) {
    markup += `<div style.width = ${30 + 10 * i}px style.height =  ${
      30 + 10 * i
    }px style.backgroundColor = ${getRandomHexColor()}></div>`;
  }
  return markup;
}

createBtn.addEventListener("click", () => {
  divRef.insertAdjacentHTML("beforeend", createBoxes(inputRef.value));
});

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  inputRef.value = "";
  divRef.innerHTML = "";
}
