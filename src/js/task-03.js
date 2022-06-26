const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ulRef = document.querySelector(".gallery");
// console.log(ulRef);
let string = "";
const imageEl = images.map((image) => {
  string += `<li class = "list__item"><img class = "image" width = "250" src = "${image.url}" alt = "${image.alt}"></li>`;
});

ulRef.insertAdjacentHTML("afterbegin", string);

ulRef.style.display = "flex";
const items = ulRef.childNodes;
items.forEach((item) => {
  item.style.flexBasis = "calc((100%-40px)/3)";
  item.style.margin = "20px";
  item.style.listStyleType = "none";
});
