const refs = {
  input: document.querySelector("#validation-input"),
  dataLength: +document.querySelector("#validation-input").dataset.length,
};
console.log(this);
refs.input.addEventListener("blur", (event) =>
  onInputLoozeBlur(event.currentTarget.value.length)
);

function onInputLoozeBlur(event) {
  refs.input.className = event === refs.dataLength ? "valid" : "invalid";
}

// як зробити в 3му рядку через this я не придумав поки що...
