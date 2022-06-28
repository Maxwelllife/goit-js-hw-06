function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("#controls").firstElementChild,
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

let size = 3;

let divBoxes = "";

const createBoxes = () => {
  const amount = +refs.input.value;
  for (let i = 0; i < amount; i++) {
    divBoxes += `<div style = "width: ${(size += 1 * 10)}px; height: ${(size +=
      1 * 10)}px; background-color: ${getRandomHexColor()}"></div>`;
  }

  boxes.insertAdjacentHTML("beforeend", divBoxes);
  divBoxes = "";
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
  refs.input.value = "";
  size = 0;
};

refs.createBtn.addEventListener("click", () => createBoxes());
refs.destroyBtn.addEventListener("click", () => destroyBoxes());
