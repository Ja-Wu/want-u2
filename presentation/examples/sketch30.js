let slider;

function setup(){
    createCanvas(600, 600);
    background(0);
    colorMode(HSL, TWO_PI, 1, 1);

    slider = createSlider(50, 250, 100, 2);
    slider.position(20, 20);
    slider.style('width', (windowWidth-200) + 'px');
}

function draw(){
    background(0);

    let s = slider.value();
    translate(width/2, height/2);
    rotate(PI*frameCount/(400-s));

    for(let phi=0; phi<TWO_PI; phi+=PI/14){
        fill(phi, 1, 0.5);
        let x = s * Math.sin(phi);
        let y = s * Math.cos(phi);

        ellipse(x, y, s/6);
    }
}