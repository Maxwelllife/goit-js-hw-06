const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulRef = document.querySelector("#ingredients");
// for (const ingredient of ingredients) {
//   const liElement = document.createElement("li");
//   liElement.textContent = ingredient;
//   liElement.classList.add("item");
//   ulRef.appendChild(liElement);
// }
const elName = ingredients.map((ingredient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  ulRef.appendChild(liElement);
});
