const redSlider = document.getElementById('redI');
const greenSlider = document.getElementById('greenI');
const blueSlider = document.getElementById('blueI');
const redValueDisplay = document.getElementById('redValue');
const greenValueDisplay = document.getElementById('greenValue');
const blueValueDisplay = document.getElementById('blueValue');
const colorDisplay = document.getElementById('colorDisplay');

function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const color = `rgb(${redValue},${greenValue},${blueValue})`;
    colorDisplay.style.backgroundColor = color;

    redValueDisplay.textContent = 'R: ' + redValue;
    greenValueDisplay.textContent = 'G: ' + greenValue;
    blueValueDisplay.textContent = 'B: ' + blueValue;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

updateColor(); // Initial update
