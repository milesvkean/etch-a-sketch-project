const DEFAULT_SIZE = 16

let currentSize = DEFAULT_SIZE

function makeRows(rows = 16, cols = 16) {
    if (rows < 1 || cols < 1) {
        return;
    }

    rows = rows > 100 ? 100 : rows;
    cols = cols > 100 ? 100 : cols;

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = "green";
        });
        container.appendChild(cell).className = "grid-item";
    };
};

function promptMe() {
    const gridSize = parseInt(window.prompt("Type the number of squares per side you want (Maximum 100)", ""));

    container.innerHTML = "";
    makeRows(gridSize, gridSize);
}

window.onload = () => {
    makeRows(DEFAULT_SIZE);
}  