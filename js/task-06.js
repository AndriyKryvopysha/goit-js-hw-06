const textField = document.querySelector('#validation-input');

const minSymbols = textField.dataset.length;

const checkFn = event => {
    event.preventDefault();
    if (event.currentTarget.value.length >= minSymbols) {
        if (textField.classList.contains('invalid')) {
            textField.classList.remove('invalid');
        }
        textField.classList.add('valid');
    }

    if (event.currentTarget.value.length < minSymbols) {
        if (textField.classList.contains('valid')) {
            textField.classList.remove('valid');
        }
        textField.classList.add('invalid');
    }
}
    
textField.addEventListener('blur', checkFn);


        
  



// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в 
// его атрибуте data - length.
// Если введено подходящее количество символов, то border инпута 
// становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.