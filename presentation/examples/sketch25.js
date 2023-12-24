let d = 40;
let s = 20;

function setup(){
    createCanvas(windowWidth - 100, windowHeight - 100);
    background(0);
}

function draw(){
    background(0);
    stroke(128);
    for(let y=-2*d; y<height+2*d; y += d){
        for(let x=-2*d; x<width+2*d; x += d){
            let xOffset = 0//s*Math.sin(frameCount/60 + y/20);
            let yOffset = s*Math.cos(frameCount/60 + x/60 + y/80);

            line(x, y, x+xOffset, y+yOffset);
            ellipse(x+xOffset, y+yOffset, 5);
        }
    }
}