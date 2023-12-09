const hueSlider = document.getElementById('hueInput');
const saturationSlider = document.getElementById('saturationInput');
const valueSlider = document.getElementById('valueInput');
const hueValueDisplay = document.getElementById('hueValue');
const saturationValueDisplay = document.getElementById('saturationValue');
const valueValueDisplay = document.getElementById('valueValue');

const colorDisplayHSV = document.getElementById('colorDisplayHSV');

function updateColorHSV() {
    const hue = hueSlider.value;
    const saturation = saturationSlider.value;
    const value = valueSlider.value;

    const rgb = hsvToRgb(hue/360, saturation/100, value/100);
    const r = rgb[0];
    const g = rgb[1];
    const b = rgb[2];

    const color = `rgb(${r},${g},${b})`;
    colorDisplayHSV.style.backgroundColor = color;

    if(value > 55){
        hueValueDisplay.style.color = 'black';
        saturationValueDisplay.style.color = 'black';
        valueValueDisplay.style.color = 'black';
    } else {
        hueValueDisplay.style.color = 'white';
        saturationValueDisplay.style.color = 'white';
        valueValueDisplay.style.color = 'white';
    }

    hueValueDisplay.textContent = 'H: ' + hue;
    saturationValueDisplay.textContent = 'S: ' + saturation + '%';
    valueValueDisplay.textContent = 'V: ' + value + '%';
}

function hsvToRgb(h, s, v){
    var r, g, b;

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch(i % 6){
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return [r * 255, g * 255, b * 255];
}

hueSlider.addEventListener('input', updateColorHSV);
saturationSlider.addEventListener('input', updateColorHSV);
valueSlider.addEventListener('input', updateColorHSV);

updateColorHSV(); // Initial update
