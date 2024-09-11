function createContainer (numSquare = 16) {
    const container = document.createElement('div');
    container.classList.add('container');

    let pageHeight = window.innerHeight;
    let pageWidth = window.innerWidth;

    let contSide;
    if (pageHeight >= pageWidth) {
        container.style.width = (pageWidth - 20) + 'px';
        contSide = pageWidth - 20;
    }
    else if (pageHeight < pageWidth) {
        container.style.width = (pageHeight - 20) + 'px';
        contSide = pageHeight - 20;
    }
    container.style.height = container.style.width;

    let squareSide = contSide/numSquare;

    for (let i = 0; i < numSquare; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < numSquare; i++) {
            let square = document.createElement('div');
            square.classList.add('row_square');
            square.style.width = squareSide + 'px';
            square.style.height = squareSide + 'px';
            square.style.backgroundColor = white;
            row.appendChild(square);
        }
        container.appendChild(row);
    }

    const body = document.querySelector('body');
    body.appendChild(container);
} 

function canvasListeners() { 
    let randomColor = false;

    // dblclicking on the canvas will pause or resume the coloring or erasing
    const container = document.querySelector('.container');
    container.addEventListener('dblclick', () => {
        if (dblclkPause) 
            dblclkPause = false;
        else if (!dblclkPause)
            dblclkPause = true;
    }, true);

    // 'isMousedown' will decide whether to erase or color
    let isMousedown;
    container.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('row_square'))
            isMousedown = true;
    }, true);

    container.addEventListener('mouseup', (event) => {
        if (event.target.classList.contains('row_square'))
            isMousedown = false;
    }, true);

    // when not paused, if mousebutton is pressed it will erase else it will color
    container.addEventListener('mouseenter', (event) => {
        if (event.target.classList.contains('row_square')) {
            if (isMousedown && !dblclkPause) {
                event.target.style.backgroundColor = white;
                event.target.style.opacity = 1;
            }
            else if (isMousedown === false && !dblclkPause) {
                let currentBgColor = window.getComputedStyle(event.target).backgroundColor;
                if (currentBgColor === white) {
                    event.target.style.backgroundColor = chooseColor(randomColor);
                    event.target.style.opacity = 0.2;
                }
                else {
                    // increase darkness
                    let currentOpacity = parseFloat(event.target.style.opacity) || 0.1;
                    event.target.style.opacity = Math.min(currentOpacity + 0.2, 1);
                }
            }
        }   
    }, true);


    // will decide whether to color black or any random color
    let colorButton = document.querySelector('.colors');
    colorButton.addEventListener('click', () => {
        if (randomColor) {
            colorButton.style.backgroundColor = 'rgb(250, 0, 0)';
            colorButton.textContent = 'Shades of Grey';
            randomColor = false;
        }
        else {
            colorButton.style.backgroundColor = 'rgb(0, 250, 0)';
            colorButton.textContent = 'Random Colors'
            randomColor = true;
        }
    });

    // changes canvas size according to the input number
    let sizeBtn = document.querySelector('.containerSize');
    sizeBtn.addEventListener('click', handleSizeBtnEvent);

    // clears canvas
    let clearBtn = document.querySelector('.clearCanvas');
    clearBtn.addEventListener('click', handleClearBtn);
}

let handleClearBtn = () => {
    let squares = document.querySelectorAll('.row_square');
    squares.forEach((square) => {
        square.style.backgroundColor = white;
        square.style.opacity = 1;
    })
}

let handleSizeBtnEvent = () => {
    let message = 'Enter the size of canvas between 1 and 100 (inclusive)';

    let canvasSize = '';
    while (canvasSize === '' || canvasSize <= 0 || canvasSize > 100 || !Number.isInteger(Number(canvasSize)))
        canvasSize = Number(prompt(message));
    
    canvasSize = Number(canvasSize);
    let containers = document.querySelectorAll('.container');
    containers.forEach((cont) => {
        cont.remove();
    });

    let sizeBtn = document.querySelector('.containerSize');
    sizeBtn.removeEventListener('click', handleSizeBtnEvent);
    createContainer(canvasSize);
    canvasListeners();
}

function chooseColor(random = false) {
    if (!random) {
        // let shade = Math.floor(Math.random() * 256);
        return `rgb(${0}, ${0}, ${0})`;
    }
    else if (random) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

let dblclkPause = true;
const white = "rgb(255, 255, 255)";

document.addEventListener('DOMContentLoaded', () => {
    createContainer();
    canvasListeners();
})





