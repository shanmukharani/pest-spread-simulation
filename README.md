# Pest Spread Simulation using Cellular Automata

## Overview
This project implements a grid-based pest infestation simulation platform that models how agricultural pests spread across farmland over time. The system applies Cellular Automata principles combined with probabilistic environmental modeling to predict infestation risk zones and support proactive pest management.

The simulation enables visualization of pest spread influenced by environmental conditions such as humidity and crop density, allowing users to observe evolving risk patterns dynamically.

---

## Problem Statement
Pest infestations often spread faster than farmers can manually monitor crops. Due to the lack of predictive visualization tools, pest management becomes reactive rather than preventive.

Environmental factors such as humidity, wind influence, and crop density significantly affect pest propagation, making infestation patterns complex and difficult to predict.

This project addresses the problem by simulating pest spread using spatial modeling techniques.

---

## Solution Approach
The farmland is represented as a 2D grid where each cell corresponds to a portion of agricultural land.

The simulation evolves over discrete time steps using Cellular Automata rules:

- Infected cells influence neighboring cells
- Spread probability depends on environmental parameters
- Infection propagation occurs probabilistically
- Risk levels are visualized using a heatmap

---

## Core Concepts Used
- Cellular Automata (Moore Neighborhood)
- Grid-Based Spatial Modeling
- Stochastic Probability Simulation
- Spatio-temporal Visualization
- Environmental Parameter Modeling

---

## Features
- Grid-based farmland simulation
- Manual initialization of infected crops
- Adjustable environmental parameters:
  - Humidity
  - Crop Density
  - Wind Direction
- Probabilistic pest spread model
- Time-step based simulation
- Risk heatmap visualization
- Interactive user controls

---

## System Architecture

```
User Interaction (Sliders / Grid Clicks)
↓
Environment Model (environment.js)
↓
Cellular Automata Simulation (simulation.js)
↓
Grid State Management (grid.js)
↓
Visualization Layer (visualization.js)
```
---

## Cellular Automata Model

Each grid cell exists in one of the following states:

- Healthy (Green)
- Infected (Red)
- Medium Risk (Orange)
- Low Risk (Yellow)

Simulation Logic:
1. Neighbor cells are identified using Moore Neighborhood rules.
2. Environmental parameters determine spread probability.
3. Randomized probability determines new infections.
4. Grid updates visually after each simulation step.

---

## Technologies Used
- HTML5
- CSS3 (Grid Layout & Styling)
- JavaScript (ES6)
- DOM Manipulation
- Probability-based Simulation Model

---

## Project Structure

```
PestSpread/
│
├── index.html
├── style.css
├── main.js
├── grid.js
├── simulation.js
├── environment.js
└── visualization.js
```
---

## How to Run

1. Clone the repository: git clone https://github.com/shanmukharani/pest-spread-simulation.git

2. Open the project folder.

3. Launch `index.html` in any modern web browser.

4. Select infected cells and start the simulation.

---

## Usage Instructions

1. Click on grid cells to mark initial infected crops.
2. Adjust environmental parameters using sliders:
   - Wind Direction (dropdown selection)
   - Humidity (slider)
   - Crop Density (slider)
3. Start the simulation.
4. Observe pest spread across time steps.
5. Colors indicate infestation risk levels.

### Color Legend
- 🟩 Green — Healthy Crop
- 🟨 Yellow — Low Risk
- 🟧 Orange — Medium Risk
- 🟥 Red — Infected Crop

---

## Future Enhancements
- Multi-crop adaptability
- AI-based spread prediction
- Integration with drone or sensor data
- Advanced risk analytics dashboard

---

## Contributors
- ShanmukhaRani — Grid modeling, UI design, and interaction logic
- Joshna Vyakaranam — Environmental modeling and parameter integration
- Kusuma — Pest spread simulation logic and visualization modules

---

## License
This project is developed for academic and hackathon demonstration purposes.
