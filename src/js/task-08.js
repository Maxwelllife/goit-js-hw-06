const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
// 1.при переборе массива инпутов, если хотябы один удовлетворяет условию
// тоесть равен пустой строке тогда выводим алерт
//2. через formData получить значения полей и собрать их в обьект
//3. а через formElements можна получить значения инпутов и проверять их на наличие текста...

//4. удалить весь говно код, открыть конспект и там все написано уже...
