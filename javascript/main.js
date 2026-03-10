// Start the pest spread
// Stop simulation
// Reset the grid
// Run simulation every second

let simulationInterval = null;

function startSimulation() {

    if (simulationInterval !== null) {
        return;
    }

    simulationInterval = setInterval(() => {
        spreadPests();
    }, 2000);

}

function stopSimulation() {

    clearInterval(simulationInterval);
    simulationInterval = null;

}

function resetSimulation() {

    stopSimulation();

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {

            grid[row][col].state = "healthy";

            grid[row][col].element.classList.remove("infected");
            grid[row][col].element.classList.remove("risk");
            grid[row][col].element.classList.remove("low-risk");

        }
    }

}