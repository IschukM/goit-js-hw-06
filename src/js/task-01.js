const itemEl = document.querySelectorAll(".item");
console.log("Number of categories", itemEl.length);

const report = itemEl.forEach((rep) => {
  const titleEl = planet.querySelector("h2");
  console.log("Category:", titleEl.textContent);
  console.log("Elements", rep.lastElementChild.children.length);
});
