let slider;

function setup(){
    createCanvas(600, 600);
    background(0);
    colorMode(HSL, TWO_PI, 1, 1);

    slider = createSlider(10, 100, 55, 5);
    slider.position(20, 20);
    slider.style('width', (windowWidth-200) + 'px');
}

function draw(){
    background(0);

    let s = slider.value();
    let x = 250 * Math.sin(frameCount/s);
    let y = 250 * Math.cos(frameCount/s);

    translate(width/2, height/2);
    ellipse(x, y, 20);
}