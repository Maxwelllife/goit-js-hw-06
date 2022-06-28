//тут була htmlcollection
// const item = document.querySelector("#categories").children;

//тут nodelist

const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);
console.log("");
items.forEach((elem) => {
  const category = elem.firstElementChild.textContent;
  const quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category} \n Elements: ${quantityElem}`);
  console.log("");
});

//-------------first variant--------------
// const items = document.querySelectorAll(".item");
// console.log("Number of categories:", items.length);
// console.log("");
// for (let elem of items) {
//   const category = elem.firstElementChild.textContent;
//   const quantityElem = elem.lastElementChild.children.length;
//   console.log(`Category: ${category} \n Elements: ${quantityElem}`);
//   console.log("");
// }
