//function getRandomHexColor() {
//  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

/*
Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити, 
після чого рендериться колекція. 
Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), 
яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, 
у такий спосіб видаляючи всі створені елементи.
*/

const create = document.querySelector('button[data-create]');
console.log(create.dataset);

const destroy = document.querySelector('button[data-destroy]');
console.log(destroy.dataset);

const input = document.querySelector('input');

input.addEventListener('input', (event) => {
    event.preventDefault();
});
  
const boxes = document.querySelector('div#boxes');

create.addEventListener('click', () => createBoxes(+input.value));

function createBoxes(amount) {
  console.log(amount);

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    console.log(box);

    const numberOfBox = boxes.children.length;
    console.log(numberOfBox);

    box.style.backgroundColor = getRandomHexColor();
    const size = 10 * numberOfBox + 30;
    box.style.width = size + "px";
    box.style.height = size + "px";

    boxes.append(box);
  };

  
};

destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  //const box = document.querySelector('div#boxes div');
  //box.remove();

  while (boxes.hasChildNodes()) {
    boxes.removeChild(boxes.lastChild);
  }
};