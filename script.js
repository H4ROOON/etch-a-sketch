const container = document.getElementById('container');
let size = prompt("Please Enter the size of the grid");

function createGrid(size) {
    container.innerHTML = '';
    container.style.width = `${size * 40}px`;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');

        square.classList.add('square');
        container.appendChild(square);
    }
}

createGrid(size);
