//Обробка відправлення форми form.login-form повинна відбуватися 
//відповідно до події submit.

//Під час відправлення форми сторінка не повинна перезавантажуватися.

//Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
//що всі поля повинні бути заповнені.

//Якщо користувач заповнив усі поля і відправив форму, 
//збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
//а значення поля - значенням властивості.

//Для доступу до елементів форми використовуй властивість elements.

//Виведи об'єкт із введеними даними в консоль і 
//очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');
//console.log(form);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    //console.log('click');
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    console.log(formElements);

    const email = formElements.email.value;
    const password = formElements.password.value;

    //const {
    //    elements: { email, password }
    //} = event.currentTarget;

    if (email === '' || password === ''){
        return alert('Please fill in all the fields!');
    };

    //console.log(`email: ${email}, password: ${password}`);

    const formData = {
        email,
        password,
    };

    console.log(formData);

    event.currentTarget.reset();
};
