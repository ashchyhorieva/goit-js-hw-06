const inputName = document.querySelector('input#name-input')
console.log(inputName);

const outputName = document.querySelector('span#name-output');
console.log(outputName);

inputName.addEventListener('input', changeOutputName);

function changeOutputName(event) {
    outputName.textContent = event.currentTarget.value;
};

