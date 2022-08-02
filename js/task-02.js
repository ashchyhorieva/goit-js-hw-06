const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function (makeList) {
  const listOfIngredients = document.createElement('li');

  listOfIngredients.classList.add('item');

  listOfIngredients.textContent = makeList;

  console.log(listOfIngredients);

  const nameOfList = document.querySelector('ul');
  console.log(nameOfList);

  nameOfList.append(listOfIngredients);
})
