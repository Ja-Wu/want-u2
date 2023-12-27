function setup() {
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len/100) * 100;
    createCanvas(len, len);
    noLoop(); // To draw only once
    let h = height / int(random(8,14));
    let maxOffset = int(random(0,100));

    let c1;
    let c2;

    for(let y=0; y<height; y+=h){
        c1 = color(random(255), random(255), random(255)); // Starting color
        c2 = color(random(255), random(255), random(255)); // Ending color

        // Draw gradient-filled rectangle
        setGradient(int(random(-maxOffset,0)), y, width+int(random(0,maxOffset)), h, c1, c2);
    }
    
}
  
function setGradient(x, y, w, h, c1, c2) {
    noFill();

    // Left to right gradient
    for (let i = x; i <= w; i++) {
        let inter = map(i, x, w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
    }
}