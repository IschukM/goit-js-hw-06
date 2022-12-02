const validationInput = document.querySelector("#validation-input");
console.log(validationInput.dataset.length);
console.log(validationInput.value.length);

validationInput.addEventListener("blur", (event) => {
  let ddd = event.currentTarget.value.length;
  console.log(ddd);
  if (ddd === validationInput.dataset.length) {
    validationInput.classList.add("validation-input.valid");
    console.log(validationInput.value);
  }
});
// console.log(validationInput.value);
