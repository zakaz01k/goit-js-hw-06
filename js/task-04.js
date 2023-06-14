let counterValue = 0; // Початкове значення лічильника

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById("value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue; // Зменшуємо значення лічильника на 1
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue; // Збільшуємо значення лічильника на 1
});
