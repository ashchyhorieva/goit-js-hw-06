/*
Лічильник складається зі спану і кнопок, 
які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
та ініціалізуй її значенням 0.

Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення 
лічильника.

Оновлюй інтерфейс новим значенням змінної counterValue.
*/

let counterEl = document.querySelector('span#value');
let counterValue = 0;

console.log(typeof (counterValue));

counterEl.textContent = String(counterValue);

console.log(counterEl);
console.log(counterEl.textContent); 
console.log(counterValue);

const increaseCounterEl = document.querySelector('button[data-action="increment"]');
console.log(increaseCounterEl);

const decreaseCounterEl = document.querySelector('button[data-action="decrement"]');
console.log(decreaseCounterEl);

increaseCounterEl.addEventListener('click', () => {
    console.log('Додати клік');

    counterValue += 1;
    counterEl.textContent = String(counterValue);
});

decreaseCounterEl.addEventListener('click', () => {
    console.log('Відняти клік');

    counterValue -= 1;
    counterEl.textContent = String(counterValue);
});