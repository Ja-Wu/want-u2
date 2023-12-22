let lines = []; // Stores the start and end points of lines in the image [startX, startY, endX, endY]
let linesDistribution = []; // Keeps track of line indices from the lines array based on line length
let frame = 0;

function setup() {
    createCanvas(600,600);
    background(255);

    // add the edges of the canvas to the lines array
    lines.push([0,0,0,height-1]);
    addLine(height);
    lines.push([0,0,width-1,0]);
    addLine(width);
    lines.push([0,height-1,width-1,height-1]);
    addLine(width);
    lines.push([width-1,0,width-1,height-1]);
    addLine(height);
}

function draw() {
    if(frame < 120){
        stroke(0);
        strokeWeight(2);

        // Chooses a random line based on linesDistribution
        let randomLine = lines[linesDistribution[int(random(0,linesDistribution.length))]];

        // Picks a random point (rX, rY) on that line
        let ran = random();
        let rX = Math.round(randomLine[0] + (randomLine[2] - randomLine[0]) * ran);
        let rY = Math.round(randomLine[1] + (randomLine[3] - randomLine[1]) * ran);

        // Picks a random direction vector (dX, dY)
        let dX = random(-1,1);
        let dY = random(-1,1);

        // Calculates the minimum intersection distance with other lines
        let minDist = 2000;
        let minX = 0;
        let minY = 0;
        // go over all existing lines
        for(let i=0; i<lines.length; i++){
            let l = lines[i];
            let Ax = l[0];
            let Ay = l[1];
            let Bx = l[2];
            let By = l[3];

            // Finds the point of intersection of two lines
            // Calculates the intersection using math formulas
            // Ax + r * (Bx - Ax) = rX + s * dX
            // Ay + r * (By - Ay) = rY + s * dY
            let r = (-Ay + rY + (((Ax - rX) * dY) / dX))/(By - Ay - (((Bx - Ax) * dY) / dX));

            // Finds the intersection point (pX,pY) on the current line
            let pX = Math.round(Ax + r * (Bx - Ax));
            let pY = Math.round(Ay + r * (By - Ay));

            // Calculates the distance between the random point and the intersection point
            let d = dist(rX, rY, pX, pY);

            // Checks if the intersection is valid
            if(d > 1 && d < minDist){
                // Checks if the intersection point is inside the canvas
                if(pX >= 0 && pX < width && pY >= 0 && pY < height){
                    // Checks if the intersection point is inside the bounding box of the line (Ax,Ay) to (Bx,By)
                    if((Ax - pX) * (Bx - pX) <= 0 && (Ay - pY) * (By - pY) <= 0){
                        // Updates the minimum values for valid intersections
                        minDist = d;
                        minX = pX;
                        minY = pY;
                    }
                }
            } 
        }

        // Draws a line from the random point to the intersection point with minimal distance
        line(rX, rY, minX, minY);

        // Adds the coordinates of the line to the lines array
        lines.push([rX, rY, minX, minY]);

        // Updates the linesDistribution based on the length of the new line
        addLine(minDist);

        // Stops drawing lines after 120 frames
        frame += 1;
    }
}

function addLine(weight){
    /* 
        Updates the linesDistribution array based on the length of the lines 
    */

    // Gets the index of the newly added line in the lines array
    let index = lines.length - 1;

    // Scales the weight to a reasonable small number
    weight = Math.ceil(weight/20);
    
    // Adds the index of the new line to the linesDistribution array based on the weight
    for(let i=0; i<weight; i += 1){
        linesDistribution.push(index);
    }
}

function mousePressed() {
    lines = [];
    linesDistribution = [];
    background(255);
    frame = 0;

    // add the edges of the canvas to the lines array
    lines.push([0,0,0,height-1]);
    addLine(height);
    lines.push([0,0,width-1,0]);
    addLine(width);
    lines.push([0,height-1,width-1,height-1]);
    addLine(width);
    lines.push([width-1,0,width-1,height-1]);
    addLine(height);

    let randomIterations = int(random(10, 20));

    for(let i=0; i<randomIterations; i+=1){
        // get a random border 
        let border = [[0,0,0,height-1], [0,0,width-1,0], [0,height-1,width-1,height-1], [width-1,0,width-1,height-1]][int(random(0,4))];

        // get a random point on that border
        let ran = random();
        let bX = int(border[0] + ran * (border[2] - border[0]))
        let bY = int(border[1] + ran * (border[3] - border[1]))

        // draw a line from the cursor to that point
        line(mouseX, mouseY, bX, bY);
        lines.push([mouseX, mouseY, bX, bY]);
        addLine(dist(mouseX, mouseY, bX, bY));
    }
}