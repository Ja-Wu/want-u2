function setup() {
    let scaleFactor;
    let circles = [];
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len/100) * 100;
    scaleFactor = len/600;
    createCanvas(len,len);
    background(0);
    noStroke();

    let x = int(random(50,width-50));
    let y = int(random(50,height-50));
    let radius = int(scaleFactor * random(50,150));
    circles.push([x,y,radius]);

    ellipse(x, y, 2*radius);

    let x1;
    let y1;
    let r1;
    let x2;
    let y2;
    let r2;

    for(let i=0; i<20; i++){
        // set the inital minimal radius to 300
        let minRadius = scaleFactor * 800;

        // choose a random position
        x1 = int(random(0,width));
        y1 = int(random(0,height));

        // go over all existing circles in the image
        for(let j=0; j<circles.length; j++){
            let circle2 = circles[j];
            x2 = circle2[0];
            y2 = circle2[1];
            r2 = circle2[2];

            // calculate the distance between the center points
            r1 = dist(x1, y1, x2, y2) - r2;

            // update minRadius
            if(r1 < minRadius){
                minRadius = r1;
            }

            // no circle can be drawn here
            if(r1 < 5){
                break;
            }
        }

        // update circles array
        if(minRadius > 4){
            
            let r = int(random(0,256));
            let g = int(random(0,256));
            let b = int(random(0,256));
            fill(r,g,b);
            circles.push([x1, y1, minRadius]);
            ellipse(x1, y1, 2*minRadius);
        }
    }
}