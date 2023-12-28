let a1;
let a2;
let a3;
let a4;
let b1;
let b2;
let c1;
let c2;
let c3;
let c4;

let snakeLength;

function setup() {
    let len = min(windowHeight, windowWidth) - 50;
    len = Math.floor(len/50) * 50;
    createCanvas(len, len);
    background(0);
    a1 = 2*int(random(30,60));
    a2 = 2*int(random(30,60));
    a3 = [1,-1][int(random(0,2))] * int(random(60,100));
    a4 = [1,-1][int(random(0,2))] * int(random(60,100));
    b1 = int(random(50,100));
    b2 = int(random(50,100));
    c1 = int(random(25,100));
    c2 = int(random(25,100));
    c3 = int(random(50,150));
    c4 = int(random(50,150));

    snakeLength = int(random(40,100));

    colorMode(HSL, snakeLength, 100, 100);
}

function draw() {
    background(0);
    translate(width/2, height/2);
    for(let i=0; i<snakeLength; i+=1){
        fill(i, 85, 50);
        let x = f(frameCount - 5*i);
        let y = g(frameCount - 5*i);
        ellipse(x, y, i/2+5);
    }
}

function f(x){
    return a1 * Math.sin(x/c2) + b1 * Math.cos(x/c1) + a3 * Math.cos(x/c3) - b2 * Math.cos(x/c2) - a2 * Math.sin(x/c4);
}

function g(x){
    return a2 * Math.cos(x/c2) + b1 * Math.sin(x/c1) + a4 * Math.sin(x/c4) - b1 * Math.sin(x/c1) - a1 * Math.cos(x/c3);
}