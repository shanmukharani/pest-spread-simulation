const humiditySlider = document.getElementById("humidity");
const densitySlider = document.getElementById("density");
const windSelect = document.getElementById("wind"); 

const humidityValue = document.getElementById("humidityValue");
const densityValue = document.getElementById("densityValue");

let humidity = parseFloat(humiditySlider.value);
let density = parseFloat(densitySlider.value);
let windDirection = windSelect ? windSelect.value : "none";

humiditySlider.oninput = function () {
    humidity = parseFloat(this.value);
    humidityValue.textContent = this.value;
};

densitySlider.oninput = function () {
    density = parseFloat(this.value);
    densityValue.textContent = this.value;
};

if (windSelect) {
    windSelect.onchange = function () {
        windDirection = this.value;
    };
}

function getEnvironmentFactor() {
    return 0.2 + humidity * 0.3 + density * 0.3;
}

function getWindFactor(dr, dc) {

    if (windDirection === "N" && dr === -1) return 1.5;
    if (windDirection === "S" && dr === 1) return 1.5;
    if (windDirection === "E" && dc === 1) return 1.5;
    if (windDirection === "W" && dc === -1) return 1.5;

    return 1;
}