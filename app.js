const container = document.querySelector('#container')
const SQUARE_NUM = 400;
const  colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function setColorToEl(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColorFromEl(element) {
    const color = getRandomColor();
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #000`;
}

for (let i = 0; i < SQUARE_NUM; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        setColorToEl(square);
    })
    square.addEventListener("mouseout", () => {
        removeColorFromEl(square);
    })
    container.appendChild(square);
}