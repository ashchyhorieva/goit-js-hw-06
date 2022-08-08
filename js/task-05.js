/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
підставляє його поточне значення в span#name-output. 
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
*/

const inputName = document.querySelector('input#name-input')
console.log(inputName);

const outputName = document.querySelector('span#name-output');
console.log(outputName);

inputName.addEventListener('input', changeOutputName);

function changeOutputName(event) {

    if (inputName.value !== '') {
        outputName.textContent = event.currentTarget.value;
        //console.log(event.currentTarget.value);
    }
    else {
        outputName.textContent = 'Anonymous';
    };

};

