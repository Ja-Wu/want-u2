let w;
let h;

let a;
let b;
let c;
let d;
let e;
let f;

function setup(){
    console.log("--- --- --- --- ---")
    w = windowWidth;
    h = windowHeight;
    canvas = createCanvas(w, h);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    background(0);
    a = floor(random(2,7))*10;
    b = floor(random(2,7))*10;

    c = floor(random(1,5));
    d = floor(random(2,6));
    e = floor(random(1,8));
    console.log("x(t) = sin(t/" + (c*a) + ")*" + (c*a) + " - cos(t/" + (e*a) + ")*" + (e*a) + " + cos(t/" + (d*b) + ")*" + (d*b));
    console.log("y(t) =-sin(t/" + (a*d) + ")*" + (a*d) + " + cos(t/" + (b*c) + ")*" + (b*c) + " + sin(t/" + (b*d) + ")*" + (b*d));
}

function draw(){
    noStroke();

    translate(w/2, h/2);

    fill(255);
    let fr = 16*frameCount;
    for(let i=0; i < 4; i++){
        ellipse(ft(fr+4*i), gt(fr+4*i), 2);
    }
}

function ft(t){
    return sin(t/(c*a))*(c*a) - cos(t/(e*a))*(e*a) + cos(t/(d*b))*(d*b);
}

function gt(t){
    return -sin(t/(a*d))*(a*d) + cos(t/(b*c))*(b*c) + sin(t/(b*d))*(b*d);
}

function mouseClicked(){
    setup();
}