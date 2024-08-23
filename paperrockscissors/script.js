/* PIEDRA, PAPEL O TIJERA

1. HTML y CSS: header y marcador, botones de piedra-papel-tijera
2. Leer los botones y el marcador
3. Jugadas posibles
4. Leer click
5. Jugada aleatoria del PC
6. Mostrar ganador
7. Sumar puntos al marcador

*/

const userPointsElement = document.getElementById('point-user');
const pcPointsElement = document.getElementById('point-pc');
const gameItemsElement = document.getElementById('game-items');
const userPickedElement = document.getElementById('result-user');
const pcPickedElement = document.getElementById('result-pc');
const textResultElement = document.getElementById('result');



gameItemsElement.addEventListener('click', (event) => {
    console.log(event.target.dataset.item)
})

let userSelection = null;
let pcSelection = null;

let userContador = 0;
let pcContador = 0;

const pcMove = () => {
    const randomNumberPcMove = Math.floor(Math.random() * 3) + 1;
    let pcMoveRound;
    if (randomNumberPcMove === 1) {
        pcMoveRound = 'papel';
        console.log(pcMoveRound);
    } else if (randomNumberPcMove === 2){
        pcMoveRound = 'piedra';
        console.log(pcMoveRound);
    } else if (randomNumberPcMove === 3){
        pcMoveRound = 'tijera';
        console.log(pcMoveRound)
    }
    return pcMoveRound;
}

const userMove = (event) => {
    const validMoves = ['piedra', 'papel', 'tijera'];

    if (validMoves.includes(event.target.dataset.item)) {
        userMoveRound = event.target.dataset.item;
        console.log(`${event.target.dataset.item}`);
        return userMoveRound;
    } else {
        console.log('Movimiento inválido');
        return null; 
    }
}

const resultMove = (event) => {
    const userMoveRound = userMove(event); 
    const pcMoveRound = pcMove();
    if (userMoveRound === pcMoveRound) {
        console.log('empate');
        textResultElement.textContent = 'Empate';
    } else if (
        (userMoveRound === 'piedra' && pcMoveRound === 'tijera') ||
        (userMoveRound === 'tijera' && pcMoveRound === 'papel') ||
        (userMoveRound === 'papel' && pcMoveRound === 'piedra')
    ) {
        textResultElement.textContent = 'El usuario ha ganado';
        userContador++;
        userPointsElement.textContent = userContador;
        
    } else if (userMoveRound === null) {
        console.log('null') 
    } else {
        textResultElement.textContent = 'El PC ha ganado';
        pcContador++;
        pcPointsElement.textContent = pcContador;
    }
}


gameItemsElement.addEventListener('click', resultMove);


