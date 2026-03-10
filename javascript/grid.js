// Create grid
// Store cell states

const gridSize = 20;
const grid = [];

const gridContainer = document.getElementById("grid");

function createGrid() {

    for (let row = 0; row < gridSize; row++) {

        grid[row] = [];

        for (let col = 0; col < gridSize; col++) {

            const cell = document.createElement("div");
            cell.classList.add("cell");

            cell.dataset.row = row;
            cell.dataset.col = col;

            // click to infect cell
            cell.addEventListener("click", () => infectCell(row, col));

            gridContainer.appendChild(cell);

            grid[row][col] = {
                state: "healthy",
                element: cell
            };

        }
    }
}

function infectCell(row, col, level = "infected") {

    grid[row][col].state = level;

    const cell = grid[row][col].element;

    cell.classList.remove("low-risk", "risk", "infected");

    cell.classList.add(level);

}

createGrid();