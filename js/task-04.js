let result = document.querySelector('#value');

const increaseValueBtn = document.querySelector('[data-action="increment"]');

const decreaseValueBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const addValueFn = () => {
    result.textContent = counterValue += 1;
}

const decreaseValueFn = () => {
    result.textContent = counterValue -= 1;;
}
increaseValueBtn.addEventListener('click' , addValueFn);

decreaseValueBtn.addEventListener('click' , decreaseValueFn);


 // Создай переменную counterValue в которой будет храниться текущее значение счетчика и 
 // инициализируй её значением 0.
 // Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение
 // счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.