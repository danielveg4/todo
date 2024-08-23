const passwordCampElement = document.getElementById('password-camp');
const lengthTextElement = document.getElementById('length-text');
const inputRangeElement = document.getElementById('input-range');
const buttonPasswordElement = document.getElementById('button-password');
const uppercaseInputElement = document.getElementById('uppercase-input');
const lowercaseInputElement = document.getElementById('lowercase-input');
const numbersInputElement = document.getElementById('numbers-input');
const symbolsInputElement = document.getElementById('symbols-input');

let allowedCharacters = ''
const uppercaseCharacters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const lowercaseCharacters = 'abcdefghijklmnñopqrstuvwxyz';
const numbersCharacters = '1234567890';
const symbolsCharacters = '+-.,!"·$%&/()=?{}';
let numeroCaracteres = 16;

const setPasswordLength = event => {
    lengthTextElement.textContent = `Length: ${inputRangeElement.value}`;
}

const checkPasswordOptions = () => {
    allowedCharacters = '';
    if (uppercaseInputElement.checked) {
        allowedCharacters += uppercaseCharacters;
    }
    if (lowercaseInputElement.checked) {
        allowedCharacters += lowercaseCharacters
    }
    if (numbersInputElement.checked) {
        allowedCharacters += numbersCharacters
    }
    if (symbolsInputElement.checked) {
        allowedCharacters += symbolsCharacters
    }
    return allowedCharacters; 
}

const getPassword = () => {
    let generatedPassword = '';
    const allowedCharacters = checkPasswordOptions();
    const numeroCaracteres = inputRangeElement.value;
    for (let i = 0; i < numeroCaracteres; i++) {
        const randomNumberPassword = Math.floor(Math.random() * allowedCharacters.length);
        generatedPassword += allowedCharacters[randomNumberPassword];
    }
    return generatedPassword;
}

const printPassword = () => {
    const generatedPassword = getPassword();
    passwordCampElement.textContent = generatedPassword;
}



buttonPasswordElement.addEventListener('click', printPassword);
inputRangeElement.addEventListener('input', setPasswordLength);
uppercaseInputElement.addEventListener('change', checkPasswordOptions)
lowercaseInputElement.addEventListener('change', checkPasswordOptions)
numbersInputElement.addEventListener('change', checkPasswordOptions)
symbolsInputElement.addEventListener('change', checkPasswordOptions)