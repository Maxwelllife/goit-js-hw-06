// 0. Порахувати кількість елементів item
// 1. Отримати доступ до item та перебрати їх, при переборі отримати доступ саме до тексту
// 2. Отримати доступ до ul і перебрати їх, при кожній ітерації при переборі ul додавати результат роботи перебору item.
// 3. в кожній ітерації при переборі ul отримати доступ до ul.children.length
// 2  та 3 складно.
// 4 при переборі звернутись до сусіда першої дитини item, або до останнього дочірнього елементу... та взяти його довжину
// 5. вивести текст категорії та кількість елементів дітей у останньої дитини item

//тут була htmlcollection
// const item = document.querySelector("#categories").children;

//тут nodelist

const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);
console.log("");
for (let elem of items) {
  const category = elem.firstElementChild.textContent;
  const quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category} \n Elements: ${quantityElem}`);
  console.log("");
}
