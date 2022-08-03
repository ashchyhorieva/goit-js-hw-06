let counterValue = document.querySelector('span#value')
console.log(counterValue);
console.log(counterValue.textContent); 

const increaseCounterValue = document.querySelector('button[data-action="increment"]');
console.log(increaseCounterValue);

const decreaseCounterValue = document.querySelector('button[data-action="decrement"]');
console.log(decreaseCounterValue);

increaseCounterValue.addEventListener('click', () => {
    console.log('Додати клік');

    counterValue.textContent = +counterValue.textContent + 1;
});

decreaseCounterValue.addEventListener('click', () => {
    console.log('Відняти клік');

    counterValue.textContent = +counterValue.textContent - 1;
});