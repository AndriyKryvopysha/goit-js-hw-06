const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const vegetablesList = document.querySelector('#ingredients');

const listOfIngredients = ingredients.map((vegetable) => {
  const newItem = document.createElement("li");
  newItem.textContent = vegetable;
  newItem.classList.add('item');
  return newItem;
});

vegetablesList.append(...listOfIngredients);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


