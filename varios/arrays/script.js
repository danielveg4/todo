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