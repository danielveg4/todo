
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