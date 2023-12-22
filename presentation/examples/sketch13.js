function setup() {
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len/100) * 100;
    createCanvas(len, len);
    background(255);
    noStroke();

    let numOfItems = 4;
    let diameter = (width*(1+Math.sqrt(5)))/(numOfItems*(2+Math.sqrt(5)));

    let xShift = Math.round(diameter/(1+Math.sqrt(5)));
    let yShift = (height - diameter * Math.floor(height/diameter) + diameter)/2;

    for(let y = yShift; y < height; y += diameter){
        for(let x = diameter/2; x < width; x += diameter + xShift){
            let r1 = int(random(0,256));
            let r2 = int(random(0,256));
            let g1 = int(random(0,256));
            let g2 = int(random(0,256));
            let b1 = int(random(0,256));
            let b2 = int(random(0,256));

            // Calculate the differences between the RGB components
            let diffR = abs(r1 - r2);
            let diffG = abs(g1 - g2);
            let diffB = abs(b1 - b2);

            // Define a threshold for closeness to determine if colors are close to being complementary
            let threshold = 50;

            // Check if the differences are within the threshold for closeness
            if (diffR < threshold && diffG < threshold && diffB < threshold) {
                r1 = 0;
                b1 = 0;
                g1 = 0;
            }

            if(random() < 0.5){
                fill(r1, b1, g1);
                ellipse(x, y, diameter);

                fill(r2, b2, g2, 127);
                ellipse(x+xShift, y, diameter);
            } else {
                fill(r1, b1, g1);
                ellipse(x+xShift, y, diameter);

                fill(r2, b2, g2, 127);
                ellipse(x, y, diameter);
            }
        }
    }
}