const categoriesEl = document.querySelectorAll('li.item');
console.log("Number of categories: " + categoriesEl.length);

categoriesEl.forEach(function (categoryNameEl) {
    const nameEl = categoryNameEl.querySelector('h2');
    console.log("Category: " + nameEl.textContent);

    const numberOfEl = categoryNameEl.querySelectorAll('li');
    console.log("Elements: " + numberOfEl.length);
});