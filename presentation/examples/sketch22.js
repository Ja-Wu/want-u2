function setup(){
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len/100) * 100;
    createCanvas(len, len);
    background(0);
}

function draw(){
    background(0);

    ellipse(width/2, height/2, 150* Math.sin(frameCount/60) + 200);
}