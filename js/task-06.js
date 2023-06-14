const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const expectedLength = parseInt(validationInput.dataset.length); // Отримуємо очікувану кількість символів з атрибуту data-length
  const inputValue = validationInput.value.trim(); // Отримуємо значення з інпуту та видаляємо зайві пробіли

  if (inputValue.length === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
