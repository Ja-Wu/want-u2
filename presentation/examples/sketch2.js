function setup(){
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len/100) * 100;
    createCanvas(len, len);
    background(255);
    strokeWeight(2);

    let rS = 15;        // randomness Scale

    let ran = 50;
    let lineOffset = 10;

    let phi = len/2 - 10;
    let offsetX = [width-ran, ran][Math.round(Math.random())];
    let offsetY = [height-ran, ran][Math.round(Math.random())];
    
    for(let y = ran; y <= height-ran; y += lineOffset){
        let lastX = ran;
        let lastY = y;
        for(let x = ran+lineOffset; x <= width-ran; x += lineOffset){
            let gauss = Math.E**(-((x-offsetX)**2 + (y-offsetY)**2)/(phi**2));
            let m = gauss * rS;
            let newY = y + random(-m,m);
            line(x,newY,lastX, lastY);

            // update lastX & lastY
            lastX = x;
            lastY = newY;
        }
    }
}