let scaleFactor = 1; // Factor to increase resolution
let res;

function setup(){
    res = min(windowHeight, windowWidth);
    res = Math.floor(res/100) * 100;
    createCanvas(scaleFactor * res, scaleFactor * res);
    background(255);
    colorMode(HSB, 360, 100, 100, 100);

    translate(width / 2, height / 2); // Translate the origin to the center of the canvas
    fill(0,25);
    stroke(0,64);
    strokeWeight(scaleFactor);
    let h = random(360); // Random hue value

    let numPoints = 6000; // Number of points
    let radius = scaleFactor * 330; // Radius of the donut
    let innerRadius = scaleFactor * 45; // Inner radius of the donut

    let mean = (radius + innerRadius)/2;
    let deviation = 3*(mean - innerRadius)/10;
    let distToMean;
    // Generate points in a donut-like shape
    for (let i = 0; i < numPoints; i++) {
        let angle = random(TWO_PI);
        let r = randomGaussian(mean, deviation);
        distToMean = Math.abs(mean - r);

        // Map the distance to a brightness value
        let b = map(distToMean, 0, 150, 30, 0);

        // Map the distance to a saturation value
        let s = map(distToMean, 10, 175, 25, 5);

        // Set the fill color using HSB color mode
        fill(h, s, 35, 25); // Hue, Saturation, Brightness, Alpha
        stroke(0, map(distToMean, 0, 150, 20, 32));   // control alpha value

        // Convert polar coordinates to Cartesian coordinates
        let x = r * cos(angle);
        let y = r * sin(angle);

        let rotation = random(TWO_PI); // Random rotation for the squares

        push(); // Save the current drawing style settings
        translate(x, y); // Translate to the point
        rotate(rotation); // Rotate by a random angle

        // Draw a square
        rectMode(CENTER);
        square(0,0,int(scaleFactor * random(5,15)));

        pop(); // Restore the previous drawing style settings
    }
}