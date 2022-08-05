/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
по кліку на button.change-color і виводить значення кольору в span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

//function getRandomHexColor() {
//  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
console.log(body);

const changeColorBtn = document.querySelector('button.change-color');
console.log(changeColorBtn);

const newBgColor = document.querySelector('span.color');
console.log(newBgColor);

changeColorBtn.addEventListener('click', (event) => {
  body.style.backgroundColor = getRandomHexColor();
  newBgColor.textContent = getRandomHexColor();
}
);