// Отримання списку категорій
const categoriesList = document.querySelectorAll("ul#categories li.item");

//Розрахунок та виведення кіл-ті категорій
const numberOfCategories = categoriesList.length;
console.log("Number of categories: ", numberOfCategories);

// Ітерація по кожній категорії та виведення тексту заголовка та кіл-ті елементів
categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.log("\nCategory: ", categoryTitle);
  console.log("Elements: ", categoryElements);
});
