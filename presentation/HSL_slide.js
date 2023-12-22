const hueSlider = document.getElementById('hueInput');
const saturationSlider = document.getElementById('saturationInput');
const lightnessSlider = document.getElementById('lightnessInput');
const hueValueDisplay = document.getElementById('hueValue');
const saturationValueDisplay = document.getElementById('saturationValue');
const lightnessValueDisplay = document.getElementById('lightnessValue');

const colorDisplayHSL = document.getElementById('colorDisplayHSL');

function updateColor() {
    const hue = hueSlider.value;
    const saturation = saturationSlider.value;
    const lightness = lightnessSlider.value;

    const color = `hsl(${hue},${saturation}%,${lightness}%)`;
    colorDisplayHSL.style.backgroundColor = color;

    // Adjust text color for better visibility based on lightness
    if (lightness > 55) {
        hueValueDisplay.style.color = 'black';
        saturationValueDisplay.style.color = 'black';
        lightnessValueDisplay.style.color = 'black';
    } else {
        hueValueDisplay.style.color = 'white';
        saturationValueDisplay.style.color = 'white';
        lightnessValueDisplay.style.color = 'white';
    }

    hueValueDisplay.textContent = 'H: ' + hue;
    saturationValueDisplay.textContent = 'S: ' + saturation + '%';
    lightnessValueDisplay.textContent = 'L: ' + lightness + '%';
}

hueSlider.addEventListener('input', updateColor);
saturationSlider.addEventListener('input', updateColor);
lightnessSlider.addEventListener('input', updateColor);

updateColor(); // Initial update