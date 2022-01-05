const textInput = document.querySelector('#name-input');

const yourName = document.querySelector('#name-output');

textInput.addEventListener('input' ,(event) => {yourName.textContent = event.currentTarget.value;

if (yourName.textContent === ""){
    yourName.textContent = "Anonymous"
} })


// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".