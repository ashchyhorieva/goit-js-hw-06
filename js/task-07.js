/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const sliderEl = document.querySelector('input#font-size-control');
console.log(sliderEl.value);

const textEl = document.querySelector('span#text');
console.log(textEl.textContent);

sliderEl.addEventListener('change', setFontSize);

function setFontSize() {
    
    const fontSize = sliderEl.value;
    console.log(fontSize);
    
    textEl.style.fontSize = fontSize + "px";
};

