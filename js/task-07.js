const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px"; // Отримуємо значення повзунка і додаємо "px" для встановлення розміру шрифту

  textSpan.style.fontSize = fontSize; // Змінюємо розмір шрифту спану
});
