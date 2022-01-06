function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const changeColorBtn = document.querySelector('.change-color');

const colorNameEl = document.querySelector('.color')

changeColorBtn.addEventListener('click', changeBgColorRandom);

function changeBgColorRandom() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorNameEl.textContent = getRandomHexColor()
}



// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на 
// button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.