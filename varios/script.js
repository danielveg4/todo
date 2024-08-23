const fiveNumbers = numbers => {
    if(!Array.isArray(numbers)) {
        console.log('El parámetro no es un array');
        return;
    } else if(numbers.length !== 5){
        console.log('Please provide 5 numbers');
        return;
    }
    const randomNumer = Math.floor(Math.random() * numbers.length);
    console.log(numbers[randomNumer])
}

fiveNumbers([1, 2, 3, 4, 5]);



const threeNumers = numbers =>{
    if (!Array.isArray(numbers)) {
        console.log('El parámetro no es un array');
        return;
    } else if (numbers.length !== 3) {
        console.log('Introduce 3 numeros');
        return;
    }
    const suma = numbers[0] + numbers[1] + numbers[2];
    console.log(suma);
    const media = suma / numbers.length;
    console.log(media)
    const max = Math.max(numbers[0], numbers[1], numbers[2])
    console.log(max)

}

threeNumers([3, 2, 4])


const fiveNumbersArray = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('El parámetro no es un array');
        return;
    } else if (numbers.length !== 5) {
        console.log('Introduce 5 numeros');
        return;
    }
    const randomNumberToTen = Math.floor(Math.random() * 10 + 1);
    if (numbers.includes(randomNumberToTen)){
        console.log(numbers.indexOf(randomNumberToTen));
    } else {console.log('no contiene el numero')}
    
}

fiveNumbersArray([1,2,3,4,5]);



const emptyArray = numbers =>{
    if (numbers.length !== 0) {
        console.log('El array tiene que estar vacío');
        return;
    }
    const randomNumber = Math.floor(Math.random() * 101);
    const newArray = numbers.push(randomNumber);
    console.log(numbers)
}

emptyArray([]);

const evenOddArray = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('No es un array!');
        return;
    } else if (numbers.length !== 3) {
        console.log('Introduce 3 valores');
        return;
    }
    const even = [];
    const odd = [];

    const randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber * numbers[0] % 2 === 0) {
        (even.push(randomNumber * numbers[0]))
    } else {odd.push(randomNumber * numbers[0])}
}

evenOddArray([3, 6, 7]);


/* ejercicio dni */

const dniLetter = number => {
    if (!Array.isArray(number)){
        console.log('no es un array!!');
        return;
    } else if (number.length !== 1
    ) {
        console.log('Introduce solo un DNI!');
        return;
    }
    
    const letters = (['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'])

    const resto = number % 23;
    console.log('Esto es el resto: ' + resto);
    letter = letters[resto];
    console.log('Y esta es la letra que falta: ' + letter);
    console.log('Con lo que el DNI es: ' + number + letter)
    
}

dniLetter([72178104])

const threeWordsArray = words => {
    if (!Array.isArray(words)) {
        console.log('no es un array!');
        return;
    } else if (words.length !== 3) {
        console.log('tiene que tener 3 letras');
        return;
    }
    const lettersArray = ([]);
    const firstWord = words[0][0];
    const lastLetterWord = words[0].charAt(words[0].length-1);
    lettersArray.push(firstWord, lastLetterWord);
    console.log(lettersArray)

}

threeWordsArray(['hola', 'como', 'estamos'])


const reverseWord = word => {
        if (typeof word !== 'string') {
        console.log('introduce una palabra');
        return;
    }

    const wordReverse = word.split('');
    const wordReverseArray = wordReverse.reverse()
    console.log(wordReverseArray.join(''))
}

reverseWord('alreves')


const threNames = (names, numbers) =>{
    if (!Array.isArray(names) || !Array.isArray(numbers)) {
        console.log('no es un array!');
        return;
    } else if (names.length !== 3 || numbers.length !== 3) {
        console.log('uno de los arrays no tiene 3 elementos');
        return;
    }

    const fusion = [];
    const fusion1 = names[0]+numbers[0];
    const fusion2 = names[1]+numbers[1];
    const fusion3 = names[2]+numbers[2];
    fusion.push(fusion1, fusion2, fusion3);
    console.log(fusion)

}

threNames(['hola', 'como', 'estamos'], ['1', '2', '3']);



const squareNumers = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('introduce un array');
        return;
    } else if (numbers.length !== 3) {
        console.log('introduce 3 numeros');
        return;
    } 

    const newArray = [];
    const squareFirst = numbers[0] * numbers[0];
    const squareSecond = numbers[1] * numbers[1];
    const squareThird = numbers[2] * numbers[2];

    newArray.push(squareFirst, squareSecond, squareThird);
    console.log(newArray);
}


squareNumers([2, 5, 7])




const startingA = names => {
    if (!Array.isArray(names)) {
        console.log('introduce un array');
        return;
    } else if (names.length !== 3) {
        console.log('introduce 3 numeros');
        return;
    } 

    
    console.log(names[0].startsWith('a'))

}

startingA(['alonso', 'cano', 'asesino']);

const numbersToten = (a) => {
    for (let i = 10; i >= 0; i--) {
            console.log('tabla: ' + a + 'x' + i + '=' + a*i)
    }
}

numbersToten(3);


/* recibe año y edad, debe imprimir "naciste en el año X, en el año X cumpliste X años " */

/* funciçon que recibe un array de 10 numeros e imprime el numero y su cuadrado */

const tenthArray = numbers => {
    for (const number of numbers) {
        console.log('El número es ' + number + ' y su cuadrado es ' + (number*number))
    }
}

const tenthArray2 = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('no es un array');
        return;
    } 
    if (numbers.length !== 10 ) {
        console.log('introduce 10 numeros')
    }

    for (let i = 0; i < 10; i++) {
        console.log('El número es ' + numbers[i] + ' y su cuadrado es ' + (numbers[i]*[numbers[i]]))
    }
}

tenthArray([0,2,3,4,5,6,7,8,13,20])

tenthArray2([0,2,3,4,5,6,7,8,13,20])

/* crea una funcion que reciba una palabra e imprima esa palabra con las vocales en mayusculas */

const upperWord = word => {
  /*   if (typeof word !== 'string'){
        console.log('introduce una palabra')
    }
    if (word.length !== 1){
        console.log('introduce solo una palabra')
    }
} */
    const arrayDividido = word.split('')
    const newWord = []

    for (let i = 0; i <= arrayDividido.length; i++){
        if (arrayDividido[i] === 'a' || arrayDividido[i] === 'e' || arrayDividido[i] === 'i' || arrayDividido[i] === 'o' || arrayDividido[i] === 'u') {
        newWord.push(arrayDividido[i].toUpperCase())
    } else {
        newWord.push(arrayDividido[i])
        }
}
console.log(newWord.join(''))
}

upperWord('mayusculas')

/* crea una funcion que reciba un array con 5 numeros del 1 al 10.
recórrelo y en el bucle genera un numero aleatorio entre el 0 y el numero del array de la vuelta
la funcion debe decir si el numero generado está en el array y en qué posicion */


const numbersToTenRandom = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('introduce un array');
        return;
    }
    if (numbers.length !== 5) {
        console.log('introduce 5 numeros en el array');
        return;
    }
    
    for (const number of numbers) {
        const newRandomNumber = Math.floor(Math.random() * number);
        if (numbers.includes(newRandomNumber)){
            console.log('incluye el número ' + number + ' que además está en la posición ' + numbers.indexOf(number))
        } else {console.log('El número ' + newRandomNumber + ' no está en el array')}
    }


}


numbersToTenRandom([1, 3, 5, 7, 9])

/* crea una función que reciba una frase e imprima el numero de veces que
se repite cada vocal */

const vowelsPhrase = phrase => {
    let counterA = 0;
    let counterE = 0;
    let counterI = 0;
    let counterO = 0;
    let counterU = 0;
    vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const letter of phrase) {
        if (letter === 'a') {
            counterA++;
        } else if (letter === 'e') {
            counterE++;
        } else if (letter === 'i') {
            counterI++;
        } else if (letter === 'o') {
            counterO++;
        } else if (letter === 'u') {
            counterU++;
        }
    }
    console.log(`La vocal a se repite ${counterA} veces, la e ${counterE} veces, la i ${counterI} veces, la u ${counterU} veces y la o ${counterO} veces`)

}


vowelsPhrase('esto es una frase espectacular')

/* multiplica cada uno de los numeros del array por un numero aleatorio del 1 al 10, si el resultado es para para even y si es impar para odd */

const tenArray = numbers => {
    const even = [];
    const odd = [];
    
    for (let i = 0; i < numbers.length; i++) {
        randomNumber = Math.floor(Math.random()*11);
        result = numbers[i] * randomNumber;
        if (result % 2 === 0) {
            even.push(result);
        } else {
            odd.push(result);
        }
    }
    console.log(numbers);
    console.log('even: ' + even);
    console.log('odd: ' + odd);

}

tenArray([1,2,3,4,5,6,7,8,9,10])


/* crea una funcion que reciba un array con 5 palabras, debes imprimir
por consola un array que contenga la inicial y la ultima letra de cada palabra en mayúsculas */


const fiveWords = words => {
    if (!Array.isArray(words)){
        console.log('tiene que ser un array');
        return;
    }

    const newArray = [];

    for (const word of words) {
        firstLetter = word[0];
        lastLetter = word[word.length-1];
        newArray.push(firstLetter.toUpperCase());
        newArray.push(lastLetter.toUpperCase());
        
    }
console.log(newArray)

}

fiveWords(['hola', 'como', 'estamos', 'hoy', 'domingo'])





// Dado este objeto, rellénalo con los datos que te pido usando el array de numbers.


const numbersData = {
  numbers: [10, 32, 31, 68, 91, 24, 51, 47],
  firstFloor: {
    firstRoom: {
      // número + 2
      numbersPlus2: []
    },
    secondRoom: {
      // número - 2
      numbersMinus2: []
    }
  },
  secondFloor: {
    firstRoom: {
      // número * 2
      numbersDouble: []
    },
    secondRoom: {
      // número / 2
      numbersDivided2: []
    }
  },
  thirdFloor: {
    // sólo pares
    onlyEven: [],
    // sólo impares
    onlyOdd: []
  },
  fourthFloor: {
    // número al cuadrado
    squareNumbers: [],
    // número al cubo
    cubeNumbers: []
  },
  fifthFloor: {
    // número aleatorio entre 0 y number
    randomNumbers: []
  },
  sixthFloor: {
    // Array de numbers al revés
    reversedNumbers: []
  }

};

    for (let i = 0; i < numbersData.numbers.length; i++) {
        numbersData.firstFloor.firstRoom.numbersPlus2.push(numbersData.numbers[i] + 2);
        numbersData.firstFloor.secondRoom.numbersMinus2.push(numbersData.numbers[i] - 2);
        numbersData.secondFloor.firstRoom.numbersDouble.push(numbersData.numbers[i] * 2);
        numbersData.secondFloor.secondRoom.numbersDivided2.push(numbersData.numbers[i] / 2);
        numbersData.fourthFloor.squareNumbers.push(numbersData.numbers[i] * numbersData.numbers[i]);
        numbersData.fourthFloor.cubeNumbers.push(numbersData.numbers[i] * numbersData.numbers[i] * numbersData.numbers[i]);
        numbersData.fifthFloor.randomNumbers.push(Math.floor(Math.random() * numbersData.numbers[i]))

        if (numbersData.numbers[i] % 2 === 0) {
            numbersData.thirdFloor.onlyEven.push(numbersData.numbers[i]);
        } else {numbersData.thirdFloor.onlyOdd.push(numbersData.numbers[i]);}
    }

// falta el reverse

console.log(numbersData)







// Dado este objeto, rellénalo con los valores que te pido sacando los datos de la propiedad "phrase". 

const stringsData = {
  phrase: 'El conocimiento es poder, pero la práctica es la clave para desbloquearlo.',
  firstFloor: {
    //Sólo vocales
    vowels: []
  },
  secondFloor: {
    //Sólo consonantes (sin espacios, sin puntos y sin comas)
    consonants: []
  },

  thirdFloor: {
    //El valor asciicode de cada letra
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    asciiCode: []
  },
  fourthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  fifthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y así sucesivamente
    // Si el caracter es un espacio u otro caracter que no sea una letra lo sustituirás por una letra random del alfabeto
    secretCode: []
  }
};

const regexVowles = /[aeiou]/i;
const regexLetters = /[a-z]/i;

for (const letter of stringsData.phrase) {
    if (regexVowles.test(letter)) {
    stringsData.firstFloor.vowels.push(letter);
} else if (regexLetters.test(letter) && !regexVowles.test(letter)) {
    stringsData.secondFloor.consonants.push(letter);
} 

stringsData.thirdFloor.asciiCode.push(letter.charCodeAt());

}



const randomWord = 'z';

for (const letter of stringsData.phrase) {
    if (letter === 'a') {
        stringsData.fifthFloor.secretCode.push('1')
    } else if (letter === 'e') {
        stringsData.fifthFloor.secretCode.push('2')
    } else if (letter === 'i') {
        stringsData.fifthFloor.secretCode.push('3')
    } else if (letter === 'o') {
        stringsData.fifthFloor.secretCode.push('4')
    } else if (letter === 'u') {
        stringsData.fifthFloor.secretCode.push('5')
    } 
}

const consonantes = 'bcdfghjklmnpqrstvwxyz';
let auxSecretCode = '';
for (const letter of stringsData.phrase) {
    if (consonantes.includes(letter)) {
        let previousLetterPosition = consonantes.indexOf(letter) - 1;
        if (previousLetterPosition === -1) {
            previousLetterPosition = consonantes.length -1;
        }
        auxSecretCode += consonantes[previousLetterPosition];
    } else {
        auxSecretCode += letter;
    }
}
console.log(auxSecretCode)

const words = stringsData.phrase.split(' ');

for (const word of words) {
    if (word[0] === word[0].toUpperCase()) {
        stringsData.fourthFloor.wordsInUppercase.push(word);
    } else {
        stringsData.fourthFloor.wordsInLowercase.push(word)
    }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const randomNumberAlphabet = Math.floor(Math.random() * alphabet.length);
const randomCharacter = alphabet.charAt(randomNumber);
auxSecretCode = auxSecretCode.replaceAll(/[^a-z0-9]/gi, randomCharacter)

console.log(stringsData)

/* forecha no devuelve nada, map sí 
basicamente:
- foreach hace algo con el array pero no devuelve nada, asi que hay que crear un array vacío
- map hace ese algo y devuelve
- filter te devuelve una parte del array filtrada */


wordssss = ['hola', 'Como', 'Estamos', 'hoy']

const filteredWords = wordssss.filter(word => word.charAt(0) === word.charAt(0).toUpperCase());
const mapedWords = wordssss.map(word => word.toUpperCase())
const foreachWords = []
wordssss.forEach(word => {
    foreachWords.push(word.toUpperCase());
  });
console.log(filteredWords)
console.log(mapedWords)
console.log(foreachWords)

/* sort */


namesToSort = ['dani', 'juan', 'pepe', 'alfredo', 'ádrian']
const sortedNames = [...namesToSort].sort ((a, b) => {
    if (a.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') > b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) return 1;
    if (b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') < a.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) return -1;
    return;
})

console.log(namesToSort, sortedNames)


const multipleArray = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('el parametro no es un array');
        return;
    }
    numbers.forEach((number, index) => console.log(number * index))
}

multipleArray([1,2,3,4,5,6,7])

const indexArray = numbers => {
    if (!Array.isArray(numbers)){
        console.log('el parametro no es un array');
        return;
    }
    const newArray = numbers.map((number, index) => number / (index + 2))
    return newArray;
}

const resultDividedByIndex = indexArray([1,2,3,4,5,6,7])

console.log(resultDividedByIndex)

const upperCaseArray = words => {
    if (!Array.isArray(words)){
        console.log('el parametro no es un array');
        return;
    }
    const upperCaseWords = words.map(word => word.toUpperCase())
    console.log(upperCaseWords)
}


upperCaseArray(['hola', 'como', 'estamos'])

/* some y filter */

const wordsAndLetter = (words, letter) => {
    if (!Array.isArray(words)){
        console.log('el parametro no es un array');
        return;
    }
    const wordsExists = words.some(word => word.toLowerCase().startsWith(letter.toLowerCase()));
    if (!wordsExists) {
        console.log('no hay palabras que empiecen por la letra');
        return;
    } 

    const filteredWords = words.filter(word => word.toLowerCase().startsWith(letter.toLowerCase()));
    return filteredWords;
};

const filteredWords3 = wordsAndLetter(['hola', 'como', 'estamos'], 'e');
console.log(filteredWords3)


const tenthArray3 = numbers => {
    if(!Array.isArray(numbers)){
        console.log('introduce un array');
        return;
    }
    if (numbers.length !== 10) {
        console.log('tienen que ser 10 números!')
        return;
    }
    let result = 0;
    numbers.forEach(number => result = result + number);
    console.log(result)
}

tenthArray3([1,2,3,4,5,6,7,8,9,10])

const tenthArray4 = numbers => {
    if(!Array.isArray(numbers)){
        console.log('introduce un array');
        return;
    }
    if (numbers.length !== 10) {
        console.log('tienen que ser 10 números!')
        return;
    }
    
    numbers.forEach(number => console.log('Tenemos el número ' + number + ' - Cuadrado: ' + (number*number) + ' - Cubo: ' + (number*number*number)) )
}


tenthArray4([1,2,3,4,5,6,7,8,9,10])

const wordToVowels = word => {

    vowelsRegex = /[aeiouáéíóú]/;
    const wordToArray = word.split('');
    console.log(wordToArray);
    let newWord = '';
    wordToArray.forEach(letter => {if (vowelsRegex.test(letter)) {
        newWord += letter.toUpperCase()} else {
        newWord += letter;
    }})
    console.log(newWord)
}

wordToVowels('palabrate')


const tenthArray5 = numbers => {
    
    const even = [];
    const odd = [];
    
    numbers.forEach(number => {
        const randomNumber = Math.floor(Math.random() * 11);
        const result = randomNumber * number;
        if (result % 2 === 0) even.push(result);
        else odd.push(result)
        }
    )
    console.log(numbers, even, odd)
}

tenthArray5([1,2,3,4,5,6,7,8,9,10])


/* crea una funcion que reciba un array de 5 palabras, debe imprimir por consola un array
que contenga la inicial y la ultima letra de cada palabra en mayusculas */


const fiveWordsToFirstLetter = words => {
    const newArray = []
    words.forEach(word => {
        firstLetter = word[0].toUpperCase();
        lastLetter = word[word.length-1].toUpperCase()
        newArray.push(firstLetter, lastLetter);
    })
    console.log(newArray)
}


fiveWordsToFirstLetter(['hola', 'como', 'estamos', 'hoy', 'pana'])

/* crea una funcion que reciba un array de 10 numeros y te diga si alguno es mayor de 5 */

const tenthArray6 = numbers => {
    mayoresArray = [];
    menoresArray = [];
    numbers.forEach(number => {
        if (number >= 5) {
            mayoresArray.push(number)
        } else {menoresArray.push(number)}
    })
    console.log('Los mayores son ' + mayoresArray + ' y los menores son ' + menoresArray)
}

tenthArray6([1,2,3,4,5,6,7,8,9])


/* crea una funcion que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud */


const numberAndWord = (words, number) => {
    if (!Array.isArray(words)){
        console.log('pasa un array!');
        return;
    }
    if (words.length !== 5) {
        console.log('introduce 5 palabras')
    }
    wordsSameLengthAsNumber = []
    words.forEach( word => {
        if (word.length == number) {
            wordsSameLengthAsNumber.push(word)
        } else {console.log('palabras con longitud distinta: ' + word)}
        }
        )
    console.log(wordsSameLengthAsNumber)
}


numberAndWord(['hola', 'adios', 'casa', 'perro', 'gato'], 4)


/* crea una función que reciba un array de números y un número y te devuelva un array con los numeros
que sean divisores de ese número */

const numbersAndNumber = (numbers, numberAlone) => {
    if (!Array.isArray(numbers)){
        console.log('pasa un array!');
        return;
    }
    const filteredNumbers = numbers.filter(number => number % numberAlone == 0);
    console.log(filteredNumbers)
}


numbersAndNumber([10,15,18,25,34,40], 4)

/* Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30 */


const usersArrayAge = users => {
    const youngPeople = users.filter(user => user.age < 30);
    return youngPeople;
}

const youngPeople = usersArrayAge([
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
    ]); 

console.log(youngPeople)

/* Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor. */

const sortedWords = words => {
    const sortWords = words.sort((a, b) => {
    if (a.length>b.length) return -1;
    if (a.length < b.length) return 1;
    return 0;
    } )
    console.log(sortWords)
}

sortedWords(['casa', 'ordenador', 'paula', 'daniel', 'apples'])

/* Crea una función que reciba un array de números desordenados, de forma aleatoria, unos se multiplicarán por 2 
y otros se dividirán por 2, mezcla ese array de forma aleatoria y después ordenalo de menor a mayor */


const randomArray = numbers => {
    
    const result = numbers.map(number => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return number * 2;
        } return number / 2;
    })
        console.log(result)
        const randomSort = result.sort(()=> Math.random( - 0.5))
        console.log(randomSort)
        const sortedArry = randomSort.sort((a, b) => a -b);
        console.log(sortedArry)
    }
    
randomArray([22, 85, 61, 12, 93, 58, 3, 90])

/* Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, 
es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10] */



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

/* const rootStyles = document.documentElement.style;
rootStyles.setProperty('propiedad', 'color') */

/* Crea un botón web que al pulsarlo genere un color aleatorio para el body y se aplique, haz una funcion para FGB y otra para hexadecimal */

const buttonChangeColorElement = document.getElementById('button-change-color');

const generateRandomRGB = () => {
    const numbersRandomColorRGB = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    const randomColorRGB = `rgb(${numbersRandomColorRGB[0]}, ${numbersRandomColorRGB[1]}, ${numbersRandomColorRGB[2]})`;
    console.log(randomColorRGB)
    return randomColorRGB;
}

const changeBackgroundColorRGB = () => {
    const randomColorRGB = generateRandomRGB();
    const rootStyles = document.documentElement.style;
    rootStyles.setProperty('--background-color', randomColorRGB)
}


buttonChangeColorElement.addEventListener('click', changeBackgroundColorRGB)


/* Crea un div de 20x20px del color que quieras y sincronçizalo con el movimiento del raton, el div deberá quedarse pegada a la flecha de tu ratçon y moverse con él */

const divMoveElement = document.getElementsByClassName('div-move');

const muvingElDiv = (event) => {
    const mouseX = event.x;
    const mouseY = event.y;

    const rootStyles = document.documentElement.style;

    rootStyles.setProperty('--x', `${mouseX}px`);
    rootStyles.setProperty('--y', `${mouseY}px`)
}

window.addEventListener('mousemove', muvingElDiv);

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


/* local storage 


setItem
getItem
clear

primero se accede al local storage:
const LS = window.localStorage;

y ahi se pueden usar los metodos:

LS.setItem('clave', valor);
si sacas por consola la clave, te dara el valor --> console.log(LS.getItem('valor'))

borrado:

LS.clear();

el problema es que cuando guardas un array o un objeto no se te guardan en ese formato, asi que tienes que usar JSON:
- JSON.stringify -> pilla nu array u objeto y lo codifica en formato string
- JSON.parse -> convierte ese dato string al dato original

ejemplo:

const numbers = [1,2,3,4,5,6];
const numbersStringify = JSON.stringify(numbers);

LS.setItem('numbers', numbersStringify)

al recuperarlo hay que usar el parse:

console.log(JSON.parse(LS.getItem('numbers')))   // fijate que va sin valor

DE AQUI SALEN LAS FUNCIONES QUE HAREMOS EN JS, que son un getter y un setter:

const getValueFromLocalStorage = (key) => {
    const item = LS.getItem(key);
    const value = JSON.parse(item);
    if (value) return value;
    console.log('Not found data with ${key})
}


const setItemFromLocalStorage = (key, value) => {
    const jsonValue = JSON.stringify(value)
    LS.setItem(key, jsonValue)
}

setItemFromLocalStorage('user', {name: 'dani'})
console.log(getValueFromLocalStorage('user'));


TIMERS:

setTimeout(funcion, tiempo);
clearTimeout(setIimeout);

para localizar ese setTimeout --> se le identifica con una variable let tipo let timeoutId;
y luego se la identifica al clearTimeout para utilizarla en algun punto del programa -> timeoutId = clearTimeout(setTimeout);
Suele ir asociado a classList.add y remove.

setInterval y clearInterval funcional igual, solo que aqui el tiempo del set es el intervalo en el que se repite. Suele ir asociado a contadores.

luego para sacar la fecha esta el objeto date:

const date = new Date();
console.log(date.getLOQUEQUIERAS()) --> getMonth, getDay, getYear...

*/