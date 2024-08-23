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