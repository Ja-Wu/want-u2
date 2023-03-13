let xCor = [];
let yCor = [];
let col = [];

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    for(let i=0; i<=20; i++){
        xCor[i] = random(0, windowWidth);
        yCor[i] = random(0, windowHeight);
        col[i] = [random(0, 255), random(0, 255), random(0, 255)];
    }
}

function draw(){
    background(0);
    for(let i=0; i<=20; i++){
        stroke(col[i][0], col[i][1], col[i][2]);
        line(xCor[i], yCor[i], mouseX, mouseY);
    }
}

function mouseClicked(){
    for(let i=0; i<=20; i++){
        xCor[i] = random(0, windowWidth);
        yCor[i] = random(0, windowHeight);
        col[i] = [random(0, 255), random(0, 255), random(0, 255)];
    }
}