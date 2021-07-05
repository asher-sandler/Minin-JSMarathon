// Unit 04
const board=document.querySelector('#board');
const SQUARES_NUMBER = 500;

const colors = ['#e74c3c','#8e44ad','#3498db',
                        '#e67e22','#2ecc71',  '#34e89e',
                         '#0f3443', '#8360c3', '#2ebf91'];

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}


function setColor(el){
    const color =  genRandomColors();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}

function  removeColor(el){
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = `0 0 2px #000`;
}

function genRandomColors(){
    const idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
}