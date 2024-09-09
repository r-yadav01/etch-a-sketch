let row = document.createElement('div');
row.classList.add('row');

let pageHeight = window.innerHeight;
let pageWidth = window.innerHeight;

// get the length of each side of the row elements
let divSide;
if (pageHeight >= pageWidth)
    divSide = pageWidth/16;
else if (pageHeight < pageWidth)
    divSide = pageHeight/16;

// create a single div inside a row
let divItem = document.createElement('div');
divItem.classList.add('row_item');
divItem.style.width = `${divSide}px`;
divItem.style.height = `${divSide}px`;
const body = document.querySelector('body');
body.appendChild(divItem);