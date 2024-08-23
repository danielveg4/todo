/* inserción */

/* - Usando éste HTML que te doy, haz que al hacer click en el botón se vayan añadiendo items con el texto correspondiente, 
es importante que los números sean consecutivos independientemente de que modifiquemos la lista en el HTML. 
Si elimináramos los "li" el primer item será "Item 1", si añadiéramos dos "li" el siguiente sería "Item 3" y así sucesivamente.

```html
<button>Añadir Elementos</button>
<ul>
  <li>Item 1</li>
</ul>
``` */

const addElementsButtonElement = document.getElementById('button-elements');
const listElement = document.getElementById('list-elements');


const getElements = () => {
    const newLi = document.createElement('li');
    newLi.textContent = 'Item ' + (listElement.children.length + 1);

    listElement.append(newLi);
}

addElementsButtonElement.addEventListener('click', getElements);

/* 
- Usando el input range que te doy haz un generador de encabezados.
  El input te permite seleccionar un número del 1 al 6, en función de cual elijas, la etiqueta label mostrará el número elegido 
  (igual que hicimos en el generador de passwords), además al hacer click en el botón se generará un encabezado con el número que 
  hayas elegido y se insertará en el div para encabezados. Si, por ejemplo, eliges el número 3, al hacer click se generará un h3 con 
  el texto "Soy un h3", si eliges un 5, se generará un h5 con el texto "Soy un h5" y así para todos los números.
 */

const labelHeadingElement = document.getElementById('label-heading');
const inputHeadingElement = document.getElementById('input-heading');
const buttonHeadingElement = document.getElementById('button-heading');
const headingsElement = document.getElementById('headings');



const setLabel = () => {
    labelHeadingElement.textContent = `Pulsa el botón para seleccionar el ${inputHeadingElement.value}`;
}

const setHeading = () => {
    labelHeadingElement.textContent = `Has seleccionado el ${inputHeadingElement.value}`;

    const newHeading = document.createElement(`h${inputHeadingElement.value}`);
    newHeading.textContent = `Soy un h${inputHeadingElement.value}`;
    headingsElement.append(newHeading);

    console.log(inputHeadingElement.value)
}

buttonHeadingElement.addEventListener('click', setHeading);
inputHeadingElement.addEventListener('input', setLabel);

/*  Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito 
dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

<h1>Posts</h1>
<!-- Contenedor de posts -->
<div>
  <div>
    <h2>Post de ejemplo</h2>
    <span>Author: Dorian</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
<!-- Fin del contenedor de posts -->
<form>
  <div>
    <label>Title</label>
    <input type="text" />
  </div>
  <div>
    <label>Author</label>
    <input type="text" />
  </div>
  <div>
    <label>Message:</label>
    <textarea></textarea>
  </div>
  <button>Send Post</button>
</form>
 */

const inputTitleElement = document.getElementById('input-title');
const inputAuthorElement = document.getElementById('input-author');
const textAreaMessageElement = document.getElementById('textarea-message');
const sendPostButtonElement = document.getElementById('button-send-post');
const postContainerElement = document.getElementById('new-posts')


const sendPost = (event) => {
    const newTitle = document.createElement('h2');
    newTitle.textContent = inputTitleElement.value;

    const newAuthor = document.createElement('span');
    newAuthor.textContent = inputAuthorElement.value;

    const newMessage = document.createElement('p');
    newMessage.textContent = textAreaMessageElement.value;

    postContainerElement.append(newTitle, newAuthor, newMessage);

    event.preventDefault();
}

sendPostButtonElement.addEventListener('click', sendPost);



/* Crea una función que sea capaz de generar 25 números aleatorios y los devuelva, 
después crea una función que obtenga los 25 números aleatorios de la otra función e inserte en el 
DOM una lista con los números pares y otra con los números impares.

<br> */

const evenNumbersElement = document.getElementById('even-numbers');
const oddNumbersElement = document.getElementById('odd-numbers');

const generateNumbers = () => {
    const numbers = [];

    while (numbers.length < 25) {
        const randomNumber = Math.floor(Math.random() * 100);

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers; 
}

const numbersToDOM = () => {
    const numbers = generateNumbers();

    const evenFragment = document.createDocumentFragment();
    const oddFragment = document.createDocumentFragment();

    for (let i = 0; i < numbers.length; i++) {
        const newLi = document.createElement('li');
        newLi.textContent = numbers[i];
        
        if (numbers[i] % 2 === 0) {
            evenFragment.append(newLi); 
        } else {
            oddFragment.append(newLi);  
        }
    }

    evenNumbersElement.append(evenFragment); 
    oddNumbersElement.append(oddFragment);
}

numbersToDOM();

/* Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 
como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

Pista: Para vaciar el contenido de un contenedor se puede usar contenedor.textContent = ""

```html
    <label>Introduce un número</label>
    <input id="input-table" type="number" />
    <button id="button-table" disabled>Imprimir tabla de multiplicar</button>
    <ul id="list-table"></ul> */

const inputTableElement = document.getElementById('input-table');
const buttonTableElement = document.getElementById('button-table');
const listTableElement = document.getElementById('list-table');

const tableToDOM = () => {
    listTableElement.textContent = ""
    const tableFragment = document.createDocumentFragment();

    for (let i = 1; i < 11; i++) {
        const newLi = document.createElement('li');
        newLi.textContent = `${inputTableElement.value} x ${i} = ${inputTableElement.value * i}`;
        tableFragment.append(newLi)
    }

    listTableElement.append(tableFragment)
}

const printTable = () => {
    const inputValue = parseFloat(inputTableElement.value);
    if (inputValue > 0 && !isNaN(inputValue)) {
        buttonTableElement.disabled = false;
    } else {
        buttonTableElement.disabled = true; 
    }
}

inputTableElement.addEventListener('input', printTable)
buttonTableElement.addEventListener('click', tableToDOM)

// Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren 
// toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM

const USERS = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];

const cardContainerElement = document.getElementById('cards-container');
const cardsButtonElement = document.getElementById('button-cards');

const printCards = () => {
    const cardsFragment = document.createDocumentFragment();
    for (const user of USERS) {
        const newName = document.createElement('p');
        const newAge = document.createElement('p');
        const newUsername= document.createElement('p');
        const newEmail = document.createElement('p');
        const newImage = document.createElement('img');
        newName.textContent = user.name;
        newAge.textContent = user.age;
        newUsername.textContent = user.username;
        newEmail.textContent = user.email;
        newImage.src = user.profileImage;
        cardsFragment.append(newName, newAge, newUsername, newEmail, newImage)
    }
    cardContainerElement.append(cardsFragment)
}


cardsButtonElement.addEventListener('click', printCards)

/* - Crea una función que sea capaz de eliminar el boton que pulsas

```html
<div>
  <button>Botón 1</button>
  <button>Botón 2</button>
  <button>Botón 3</button>
  <button>Botón 4</button>
  <button>Botón 5</button>
  <button>Botón 6</button>
  <button>Botón 7</button>
  <button>Botón 8</button>
  <button>Botón 9</button>
  <button>Botón 10</button>
</div>
``` */

const buttonsContainerElement = document.getElementById('buttons-container');

const deleteButton = (event) => {
    event.target.remove();
}

buttonsContainerElement.addEventListener('click', deleteButton)

/* - Crea una función que reciba un número y genere un div con tantos botones dentro como número le hayais pasado. 
A continuación tienes que conseguir que al hacer click en cualquiera de los botones elimine el botón siguiente al que has pulsado, 
si no hubiera botón siguiente, elimina el anterior, y si no hay ni anterior ni siguiente se elimina él mismo y el contenedor de los botones.
*/

const buttonConainerElement = document.getElementById('button-container');

const generateButton = () => {
    const randomNumberButton = Math.floor((Math.random() * 10) +1 );
    const buttonFragment = document.createDocumentFragment();
    for (let i = 1; i < randomNumberButton; i++) {
        const newButton = document.createElement('button');
        newButton.textContent = `Botón ${i}`;
        buttonFragment.append(newButton)
    }
    buttonConainerElement.append(buttonFragment)

}

generateButton();

const removeButton = (event) => {
    const clickedButton = event.target;

    if (clickedButton.nextSibling === null && clickedButton.previousSibling === null) {
        clickedButton.parentNode.remove();
    } else if (clickedButton.nextSibling !== null) {
        clickedButton.nextSibling.remove();
    } else if (clickedButton.previousSibling !== null) {
        clickedButton.previousSibling.remove();
    }
};

buttonConainerElement.addEventListener('click', removeButton)

/* - Crea una función que permita añadir elementos a la lista con la misma estructura que te doy en el ejemplo, 
además cada vez que pulses el botón de la X debe eliminar el elemento de la lista que has pulsado.

<button>Añadir elemento</button>
<ul>
  <!-- Cada vez que pulses el botón deberá añadirse un li con un button dentro -->
  <li>Elemento 1 <button>X</button></li>
</ul> */

const newLiButtonElement = document.getElementById('button-li');
const newUlListElement = document.getElementById('ul-list');

let contador = 2;

const createLiElement = () => {
    const newLiElement = document.createElement('li');
    newLiElement.textContent = `Elemento ${contador++} `;
    newUlListElement.append(newLiElement);

    const newButtonDeleteLi = document.createElement('button');
    newButtonDeleteLi.textContent = 'X';
    newLiElement.append(newButtonDeleteLi);

    newButtonDeleteLi.addEventListener('click', () => {
        console.log('elemento eliminado');
        newLiElement.remove();
        contador--;
    });
}


newLiButtonElement.addEventListener('click', createLiElement);