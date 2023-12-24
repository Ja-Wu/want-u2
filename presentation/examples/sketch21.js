function setup(){
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len/100) * 100;
    createCanvas(len, len);
    background(0);
}

function draw(){
    background(0);

    let r = map(Math.sin(frameCount/50), -1, 1, 0, 255);
    let g = map(Math.sin(frameCount/70), -1, 1, 0, 255);
    let b = map(Math.sin(frameCount/90), -1, 1, 0, 255);
    fill(r,g,b);
    rectMode('center');
    rect(width/2, height/2, 100, 100);
}