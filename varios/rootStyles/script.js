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