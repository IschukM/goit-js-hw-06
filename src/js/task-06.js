const inputRef = document.querySelector("#validation-input");

console.log(Number(inputRef.dataset.length));

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add(`valid`);
    console.log(event.currentTarget.value.length);
  } else inputRef.classList.replace(`valid`, `invalid`);
}
