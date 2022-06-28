function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
console.log(document.body);
button.addEventListener("click", onBodyChangeColor);

function onBodyChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.innerHTML = getRandomHexColor();
}
