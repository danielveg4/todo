/* Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos 
que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es... mi hermano es ... No puedes seleccionar ningún elemento más,
sólo el h3.

<header id="header" class="header">
  <h1 id="main-title" class="title">Soy un título</h1>
  <h2 id="main-subtitle" class="subtitle">Soy un subtítulo</h2>
  <h3 id="start-point" class="start">
</header> */

const thirdTitleElement = document.getElementById('start-point');
console.log('Soy un h3 con el id ' + thirdTitleElement.id + ' y la clase ' + thirdTitleElement.className + '. Mi padre es ' + thirdTitleElement.parentElement.localName +  ' y mi hermano es ' + thirdTitleElement.previousElementSibling.previousElementSibling.className);



/* - Añadiendo este HTML al que ya tienes, muestra por consola el número de etiquetas que hay de cada elemento.
  - Hay 1 Header
  - Hay 1 h1
    ......
 */


const sectionElement = document.querySelector('section');
console.log('Hay un header: ' + sectionElement);
const allArticleElements = document.querySelectorAll('article');
console.log('Hay ' + allArticleElements.length + ' artículos')

/* añadele un evento de click que muestre en la consola su texto al hacer click. */

const consoleButtonElement = document.getElementById('buttonexercice');

consoleButtonElement.addEventListener('click', () => {
    console.log(consoleButtonElement.textContent)
})

/*  Crea un h1 con el texto "Soy un título ", al ponerte encima con el ratón, deberá cambiar al texto 
a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título" */

const h1Element = document.getElementById('soyUnH1');

h1Element.addEventListener('mouseover', (event) => {
    event.target.textContent = 'Quita de encima!';
})

h1Element.addEventListener('mouseout', () => {
    h1Element.textContent = 'Soy un h1';
})

/*  Agrega un evento que escuche el cambio de tamaño de ventana y haz que un h1 muestre 
el mensaje "La ventana tiene un ancho de ...px y un alto de ...px . */

const windowH1Element = document.getElementById('h1Ventana');

window.addEventListener('resize', () => {
    windowH1Element.textContent = 'La ventana tiene un ancho de ' + window.innerWidth + 'px y un alto de ' + window.innerHeight + 'px . ';
})

/* Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner "Has pulsado la tecla ...", 
como extra puedes poner si ha pulsado alguna combinación de teclas, alt + r, control + g, etc. */

const tecladoElement = document.getElementById('soyUnP');

window.addEventListener('keydown', (event) => {
    tecladoElement.textContent = 'Has pulsado la techa ' + event.key;
})

/*  Crea un select con 4 opciones (la opción por defecto y otras 3) y añade un p con el texto "Seleccione una opción".
 Al seleccionar una opción el texto del p cambiará a "Ha seleccionado ...", si la opción selecionada es la de por defecto, 
 el texto volverá a ser "Seleccione una opción" */

 const selectMessageElement = document.getElementById('text-select');
 const selectElement = document.getElementById('select');

 selectElement.addEventListener('change', () => {
    selectMessageElement.textContent = 'Ha seleccionado la opción ' + selectElement.value;
    if (selectElement.value === 'default') {
        selectMessageElement.textContent = 'Seleccione una opción'

    }
 })

 /* Crea un input de tipo date y un p que diga "Selecciona una fecha", 
 al seleccionar una fecha el p dirá la fecha en texto. 
 Si seleccionas el 26/07/2023 el texto deberá ser "Has seleccionado el 26 de Julio de 2023" */

const inputDateElement = document.getElementById('input');
const textInputDateElement = document.getElementById('text-input');

inputDateElement.addEventListener('change', () => {
    textInputDateElement.textContent = 'Ha seleccionado el ' + inputDateElement.value;
})

/* Crea un formulario para calcular descuentos, pon dos inputs de tipo number, uno para el precio y otro para el descuento, 
añade un botón con el texto "Calcular". Al hacer click en el botón muestra un texto que diga
 "El precio original es ..., aplicando un descuento del ...% el precio final es de ..." */

 const textFormElement = document.getElementById('text-form');
 const formElement = document.getElementById('form');
 const buttonFormElement = document.getElementById('button-form');

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    textFormElement.textContent = 'El precio orginial es de ' + formElement[0].value + ', aplicando un descuento del ' + formElement[1].value + '% el precio final es de ' + (formElement[0].value - (formElement[0].value / 100 * formElement[1].value))
})

/* Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien 
el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous. */


fiveWordsArray = ['hola', 'como', 'nos', 'encontramos', 'hoy'];

const previusButtonElement = document.getElementById('previus-button');
const nextButtonElement = document.getElementById('next-button');
const textButtonElement = document.getElementById('h2-five');
let slideCounter = 0;

nextButtonElement.addEventListener('click', () => {
    if (slideCounter === fiveWordsArray.length - 1) {
        slideCounter = 0;
    } else {
        slideCounter++
    }
    arrayIndex = fiveWordsArray[slideCounter];
    textButtonElement.textContent = arrayIndex;
})

previusButtonElement.addEventListener('click', () => {
    if (slideCounter === 0) {
        slideCounter = fiveWordsArray.length -1;
    } else {
        slideCounter--
    }
    arrayIndex = fiveWordsArray[slideCounter];
    textButtonElement.textContent = arrayIndex;
})

/* Crea un formulario con dos inputs para username y password. Añade otro input de tipo checkbox que diga "Acepto los términos y condiciones." 
Pon un botón al formulario que permita enviarlo. El botón estará desactivado hasta que hayas escrito un nombre de más de tres caracteres, 
un password de más de 4 caracteres y el checkbox esté activado. La propiedad que permite activar o desactivar un elemento de formulario es "disabled" y es un boolean. 
Al enviar el formulario deberás mostrar por consola el mensaje "El usuario ... ha iniciado sesión". */

const finalFormElement = document.getElementById('final-form');
const finalButtonFomrElement = document.getElementById('final-button-form');

const login = () => {
    console.log(`El usuario ${finalFormElement[0].value} ha iniciado sesión.`)
}

const validateForm = () => {
    const nameValue = finalFormElement[0].value;
    const passwordValue = finalFormElement[1].value;
    const termsCheked = finalFormElement[2].checked;

    if (nameValue.length <= 3 || passwordValue <= 4 || !termsCheked) {
        finalButtonFomrElement.disabled = true;
        return;
    }

    finalButtonFomrElement.disabled = false;
}

finalFormElement.addEventListener('submit', event => {
    event.preventDefault();
    login();
})

finalFormElement.addEventListener('input', validateForm)