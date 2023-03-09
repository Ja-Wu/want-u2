var fr = 0;
var transX;
var transY;

let canvas;
let red, blue, green;

let ax, ay, bx, by, cx, cy;

const nb_of_lines = 20;

function setup(){
    red = random(200, 350);
    blue = random(250, 400);
    green = random(200, 400);
    ax = floor(random(20, 60));
    ay = floor(random(20, 100));
    bx = floor(random(30, 80));
    by = floor(random(40, 70));
    cx = floor(random(20, 50));
    cy = floor(random(50, 100));
    transX = windowWidth/2;
    transY = windowHeight/2;
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

function draw(){
    background(0);

    translate(transX, transY);

    for(let i=0; i<nb_of_lines; i++){
        let ratio = i/nb_of_lines;
        let step = fr+6*i
        let a = 2*xt(step)
        let b = 2*yt(step)
        let c = 2*xs(step)
        let d = 2*ys(step)
        let e = 2*xu(step)
        let f = 2*yu(step)
        stroke(ratio*col(fr+60, red), ratio*col(fr, green), ratio*col(fr-60, blue));
        let sizeEllipse = (3*ratio)+1
        ellipse(a, b, sizeEllipse);
        ellipse(c, d, sizeEllipse);
        ellipse(e, f, sizeEllipse);
        line(a,b,c,d);
        line(a,b,e,f);
        line(c,d,e,f);
    }
    // beginn front lime:
    let step = fr+6*nb_of_lines
    let a = 2*xt(step)
    let b = 2*yt(step)
    let c = 2*xs(step)
    let d = 2*ys(step)
    let e = 2*xu(step)
    let f = 2*yu(step)
    stroke(col(fr, red)+25, col(fr, green)+25, col(fr, blue)+25);
    ellipse(a, b, 5);
    ellipse(c, d, 5);
    ellipse(e, f, 5);
    line(a,b,c,d);
    line(a,b,e,f);
    line(c,d,e,f);
    // end
    fr++;
}

function col(t, val){
    return 105*sin(t/val)+150;
}


function xt(t){
    return sin(t/ax)*ax + sin(t/50)*50 - cos(t/75)*80 + sin(fr/300)*100;
}

function xs(t){
    return -sin(t/bx)*bx + sin(t/40)*70*cos(t/120) - sin(t/50)*40 + cos(fr/270)*100;
}

function yt(t){
    return sin(t/ay)*ay + sin(t/100)*80 + 35*cos(t/25) - cos(t/35)*25;
}

function ys(t){
    return - sin(t/by)*by - sin(t/100)*60 + 30*cos(t/35);
}

function xu(t){
    return -cos(t/cx)*cx + sin(t/50)*50 + cos(t/100)*100;
}

function yu(t){
    return -sin(t/cy)*cy + cos(t/120)*80 + sin(t/60)*50
}