let d = 30;
let xSlider, ySlider, zSlider, sSlider;
let view = true;

function setup(){
    createCanvas(windowWidth - 100, windowHeight - 100);
    background(0);

    xSlider  = createSlider(0, PI/2, 0, PI/200);
    xSlider.position(0, 10);
    xSlider.style('width', (windowWidth/4 - 10) + 'px');
    ySlider  = createSlider(0, PI/2, 0, PI/200);
    ySlider.position(windowWidth/4, 10);
    ySlider.style('width', (windowWidth/4 - 10) + 'px');
    zSlider  = createSlider(0, PI/2, 0, PI/200);
    zSlider.position(windowWidth/2, 10);
    zSlider.style('width', (windowWidth/4 - 10) + 'px');
    sSlider  = createSlider(10, 30, 20, 1);
    sSlider.position(3*windowWidth/4, 10);
    sSlider.style('width', (windowWidth/4 - 10) + 'px');
}

function draw(){
    if(view){
        background(0);
        stroke(128);
    } else {
        background(255);
        stroke(0);
    }
    
    const xS = xSlider.value();
    const yS = ySlider.value();
    const zS = zSlider.value();
    const s = sSlider.value();
    for(let y=-2*d; y<height+2*d; y += d){
        for(let x=-2*d; x<width+2*d; x += d){
            let xOffset = s * Math.cos(frameCount / 60 + y * yS / 40 + x * zS / 60);
            let yOffset = s * Math.cos(frameCount / 60 + x * xS / 40 + y * zS / 60);

            if(view){
                line(x, y, x+xOffset, y+yOffset);
                ellipse(x+xOffset, y+yOffset, 5);
            } else {
                let x1 = s * Math.cos(frameCount / 60 + y * yS / 40 + (x+d) * zS / 60);
                let y1 = s * Math.cos(frameCount / 60 + (x+d) * xS / 40 + y * zS / 60);
                line(x+xOffset, y+yOffset, x+d+x1, y+y1);

                let x2 = s * Math.cos(frameCount / 60 + (y+d) * yS / 40 + x * zS / 60);
                let y2 = s * Math.cos(frameCount / 60 + x * xS / 40 + (y+d) * zS / 60);
                line(x+xOffset, y+yOffset, x+x2, y+d+y2);
            }
        }
    }
}

function mouseClicked() {
    if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
        view = !view;
    }
}