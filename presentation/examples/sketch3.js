function setup(){
    createCanvas(600, 600);
    background(255);
}

function draw(){
    background(255);

    let edge = 50;
    let len = 20;
    let phi = 200;
    let offsetX = mouseX;
    let offsetY = mouseY;

    for(let y=edge; y < height-edge; y+=len){
        for(let x=edge; x < width-edge; x+=len){
            let gauss = Math.E**(-((x-offsetX)**2+(y-offsetY)**2)/(phi**2));
            fill(Math.floor(255*gauss), 0, 0);
            let sideLength = (8 * len * gauss + len)/10;
            let offset = (len-sideLength)/2;
            square(x+offset,y+offset,sideLength);
        }
    }
}