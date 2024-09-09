let row = document.createElement('div');
row.classList.add('row');

let pageHeight = window.innerHeight;
let pageWidth = window.innerHeight;

const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);


// get the length of each side of the row elements
let divSide;
if (pageHeight >= pageWidth) {
    container.style.width = pageWidth - 20 + 'px';
    container.style.height = container.style.width;
    divSide = (pageWidth-20)/16;
}
else if (pageHeight < pageWidth) {
    container.style.width = pageHeight - 20 + 'px';
    container.style.height = container.style.width;
    divSide = (pageWidth-20)/16;
}


// create a single div inside a row
let divItem = document.createElement('div');
divItem.classList.add('row_item');
divItem.style.width = `${divSide}px`;
divItem.style.height = `${divSide}px`;
container.appendChild(divItem);

