const counterValue = 0; // Початкове значення лічильника

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById("value");

decrementBtn.addEventListener("click", () => {
  valueSpan.textContent = counterValue - 1; // Зменшуємо значення лічильника на 1
});

incrementBtn.addEventListener("click", () => {
  valueSpan.textContent = counterValue + 1; // Збільшуємо значення лічильника на 1
});
