let w = 20;
let offsetSlider;

function setup(){
    createCanvas(windowWidth - 100, windowHeight - 200);
    background(0);

    offsetSlider = createSlider(0, PI/4 + 0.01, 0, PI/200);
    offsetSlider.position(20, 20);
    offsetSlider.style('width', (windowWidth-200) + 'px');
}

function draw(){
    background(0);
    stroke(255);

    let offset = offsetSlider.value(); // Get the slider value

    for(let x = 0; x < width; x += 2 * w){
        let y = height / 2 + 2 * height * Math.sin((frameCount / 60) + (x*offset)/10) / 5;

        line(x, y, x, height / 2);
        ellipse(x, y, w);
    }
}
