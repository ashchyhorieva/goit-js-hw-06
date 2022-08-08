const textInput = document.querySelector('input#validation-input');
console.log(textInput.value.length);
console.log(typeof textInput.value.length);

const inputLength = document.querySelector('input[data-length="6"]');
console.log(inputLength.dataset.length);
console.log(typeof inputLength.dataset.length);


textInput.addEventListener('focus', onInputFocus);
textInput.addEventListener('blur', onInputBlur);
textInput.addEventListener('change', onInputChange);

function onInputFocus() {
    console.log(onInputFocus);
};

function onInputBlur() {

    if (textInput.value.length === Number(inputLength.dataset.length)) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
        //console.log("Added class: valid");
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
        //console.log("Added class: invalid");    
    };

    console.log(onInputBlur);
};

function onInputChange(event) {

    console.log(event.currentTarget.value.length);
};

