const validationInput = document.querySelector("#validation-input");
console.log(validationInput.dataset.length);
console.log(validationInput.value.length);

validationInput.addEventListener("blur", (event) => {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === validationInput.dataset.length) {
    validationInput.classList.add("validation-input.valid");
    console.log(validationInput.value);
  }
});
// console.log(validationInput.value);
