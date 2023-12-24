let speedSlider, amplitudeSlider, radiusSlider;

function setup(){
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len / 100) * 100;
    createCanvas(len, len);
    background(0);

    // Create sliders for controlling variables
    speedSlider = createSlider(10, 60, 35, 1); // Speed slider
    speedSlider.position(20, 20);

    amplitudeSlider = createSlider(10, 200, 100, 5); // Amplitude slider
    amplitudeSlider.position(20, 50);

    radiusSlider = createSlider(10, 100, 50, 1); // Radius slider
    radiusSlider.position(20, 80);
}

function draw(){
    background(0);

    // Get values from sliders
    let speed = speedSlider.value();
    let amplitude = amplitudeSlider.value();
    let radius = radiusSlider.value();

    // Draw circle with parameters controlled by sliders
    ellipse(width / 2, amplitude * Math.sin(PI * frameCount / speed) + height / 2, radius);
}
