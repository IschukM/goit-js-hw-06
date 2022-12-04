function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColorEl = document.querySelector("body");
const btnColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

btnColorEl.addEventListener("click", changeBodyColor);

function changeBodyColor(event) {
  colorEl.textContent = getRandomHexColor();
  console.log(colorEl.textContent);
  bodyColorEl.style.backgroundColor = colorEl.textContent;
}
console.log(colorEl.textContent);
