let counterValue = 0;
const counterValuesShow = document.querySelector("#value");

const decrBtn = document.querySelector('button[data-action="decrement"]');
decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterValuesShow.textContent = counterValue;
});

const incrBtn = document.querySelector('button[data-action="increment"]');
incrBtn.addEventListener("click", () => {
  counterValue += 1;
  counterValuesShow.textContent = counterValue;
});
