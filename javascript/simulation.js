// Find infected cells
// Check neighbors
// Apply probability formula
// Infect new cells

function getNeighbors(row, col) {

    const neighbors = [];

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {

            if (i === 0 && j === 0) continue;

            const newRow = row + i;
            const newCol = col + j;

            if (
                newRow >= 0 &&
                newRow < gridSize &&
                newCol >= 0 &&
                newCol < gridSize
            ) {
                neighbors.push([newRow, newCol]);
            }

        }
    }

    return neighbors;
}

function spreadPests() {

    const newInfections = [];

    for (let row = 0; row < gridSize; row++) {

        for (let col = 0; col < gridSize; col++) {

            if (grid[row][col].state === "infected") {

                const neighbors = getNeighbors(row, col);

                neighbors.forEach(([nr, nc]) => {
                
                    if (grid[nr][nc].state === "healthy") {
                
                        const dr = nr - row;
                        const dc = nc - col;
                
                        let probability =
                            getEnvironmentFactor() *
                            getWindFactor(dr, dc);
                
                        if (Math.random() < probability) {
                            newInfections.push([nr, nc]);
                        }
                
                    }
                
                });

            }

        }

    }

    newInfections.forEach(([r, c]) => {

    let rand = Math.random();

    if (rand < 0.3) {
        infectCell(r, c, "low-risk");
    }
    else if (rand < 0.6) {
        infectCell(r, c, "risk");
    }
    else {
        infectCell(r, c, "infected");
    }

});
}