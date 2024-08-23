const userPointsElement = document.getElementById('user-points');
const pcPointsElement = document.getElementById('pc-points');
const gameOptionsElement = document.getElementById('game-options');
const userMoveElement = document.getElementById('user-move');
const pcMoveElement = document.getElementById('pc-move');
const resultElement = document.getElementById('result');

let userMove = null;
let pcMove = null;
let userPoints = 0;
let pcPoints = 0;

const validMoves = ['rock', 'paper', 'scissor'];
const gameRules = {
    paper: {
        rock: true,
        scissor: false,
        spock: false,
        lizzard: true
    },
    rock: {
        paper: false,
        scissor: true,
        spock: true,
        lizzard: false
    },
    scissor: {
        paper: true,
        rock: false,
        spock: true,
        lizzard: false
    },
    lizzard: {
        paper: true,
        rock: true,
        scissor: false,
        spock: false
    },
    spock: {
        paper: true,
        rock: false,
        scissor: true,
        lizzard: false
    }
};


const setPcMove = () => {
    const randomPcNumber = Math.floor(Math.random() * validMoves.length);
    pcMove = validMoves[randomPcNumber];
}

const setUserMove = event => {
    if (!event.target.dataset.item) {
        return;
    }
    userMove = event.target.dataset.item;
    setPcMove();

}

const setMove = (event) => {
    setUserMove(event);
    if (userMove === pcMove) {
        resultElement.textContent = 'TIE'
    } else if (gameRules[userMove][pcMove] === true) {
        userPoints++;
        resultElement.textContent = 'YOU WIN'
    } else if (gameRules[userMove][pcMove] === false) {
        pcPoints++;
        resultElement.textContent = 'PC WIN'
    }
}

const printMove = (event) => {
    setMove(event);
    userPointsElement.textContent = userPoints;
    pcPointsElement.textContent = pcPoints;
    userMoveElement.textContent = userMove;
    pcMoveElement.textContent = pcMove;    
}


if (document.body.dataset.mode === 'advanced') {
    validMoves.push('lizzard', 'spock')
}


gameOptionsElement.addEventListener('click', printMove);


