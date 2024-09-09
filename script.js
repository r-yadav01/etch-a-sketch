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
            row.appendChild(square);
        }
        container.appendChild(row);
    }

    const body = document.querySelector('body');
    body.appendChild(container);
} 

document.addEventListener('DOMContentLoaded', () => {
    createContainer();
})