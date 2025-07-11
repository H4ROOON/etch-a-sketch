const container = document.getElementById('container');
let size = prompt("Please Enter the size of the grid");
const resetButton = document.getElementById('newGrid');

const blackBtn = document.getElementById('blackMode');
const rainbowBtn = document.getElementById('rainbowMode');
const clearButton = document.getElementById('clearGrid');

blackBtn.addEventListener('click', () => {
    currentMode = 'black';
});

rainbowBtn.addEventListener('click', () => {
    currentMode = 'rainbow';
});

clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

let currentMode = 'black';
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100):");

    if (newSize === null) return;

    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Invalid size. Please enter a number between 1 and 100.");
        return;
    }

    createGrid(newSize);
});
function createGrid(size) {
    container.innerHTML = '';
    container.style.width = `${size * 40}px`;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');

        square.classList.add('square');
        square.addEventListener('mouseenter', () => {
            if (currentMode === 'black') {
                square.style.backgroundColor = 'black';
            } else if (currentMode === 'rainbow') {
                square.style.backgroundColor = getRandomColor();
            }
        });

        container.appendChild(square);
    }
}
createGrid(size);
