// This file updates how the grid looks.
// It converts cell states into colors.


function updateRiskZones() {

    for (let row = 0; row < gridSize; row++) {

        for (let col = 0; col < gridSize; col++) {

            if (grid[row][col].state === "infected") {

                const neighbors = getNeighbors(row, col);

                neighbors.forEach(([nr, nc]) => {

                    if (grid[nr][nc].state === "healthy") {

                        grid[nr][nc].element.classList.add("risk");

                    }

                });

            }

        }

    }

}