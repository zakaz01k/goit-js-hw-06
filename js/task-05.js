const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim(); // Отримуємо значення з інпуту та видаляємо зайві пробіли

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous"; // Якщо інпут порожній, встановлюємо значення "Anonymous" в спані
  } else {
    nameOutput.textContent = inputValue; // Якщо є значення в інпуті, встановлюємо його в спан
  }
});
