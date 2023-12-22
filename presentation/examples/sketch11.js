let scaleFactor;

function setup(){
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len/100) * 100;
    scaleFactor = len/600;
    createCanvas(len, len);
    background(0);

    let iteration = 20;
    let numOfCircles = 30;

    let points = [];
    let x;
    let y;
    let yChange;
    let radius;
    let r;
    let g;
    let b;
    let alphaChange = 255/iteration;

    for(let i=0; i<numOfCircles; i++){
        x = i/(numOfCircles-1)*width// + int(random(0,5));
        y = int(random(height/2, height));
        yChange = scaleFactor * random(10,30);
        radius = int(scaleFactor * random(2,10));
        r = int(random(0,256));
        g = int(random(0,256));
        b = int(random(0,256));
        let entry = {x : x, y : y, yChange : yChange, r : radius, color : [r,g,b,alphaChange]};
        points.push(entry);
    }

    for(let i=0; i<iteration; i++){
        points.forEach(point => {
            fill(point.color);
            ellipse(point.x, point.y, point.r);
            point.y -= point.yChange;
            point.color[3] += alphaChange;
            point.r += 1;
        });
    }
}