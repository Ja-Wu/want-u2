let yOffset = 40;
let xOffset = 20;

function setup(){
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len/100) * 100;
    createCanvas(len, len);
    background(0);
}

function draw(){
    background(0);

    for(let y=0; y<height; y+=yOffset){
        for(let x=0; x<width; x+=xOffset){
            let value = Math.sin(frameCount/60 + (x+y)/20)
            fill(127 * value + 127, 255, 255);
            let xCoord = x;
            let yCoord = y + yOffset/2 * value;
            let r = 5 + 2*Math.cos(frameCount/60 + (x+y)/20);
            ellipse(xCoord, yCoord, r);
        }
    }
}