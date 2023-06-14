const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ul = document.getElementById("ingredients"); // Знаходимо список ul за його id

ingredients.forEach((ingredient) => {
  const li = document.createElement("li"); // Створюємо елемент <li>
  li.textContent = ingredient; // Додаємо текстовий вміст
  li.classList.add("item"); // Додаємо клас "item"

  ul.appendChild(li); // Додаємо елемент <li> до списку ul
});
