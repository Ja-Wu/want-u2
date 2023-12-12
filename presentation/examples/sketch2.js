function setup(){
    createCanvas(600,600);
    background(255);

    let rS = 15;        // randomness Scale

    let ran = 50;
    let len = 20;

    let phi = 250;
    let offsetX = [width-ran, ran][Math.round(Math.random())];
    let offsetY = [height-ran, ran][Math.round(Math.random())];
    
    for(let y = ran; y <= height-ran; y += len){
        let lastX = ran;
        let lastY = y;
        for(let x = ran+len; x <= width-ran; x += len){
            let gauss = Math.E**(-((x-offsetX)**2+(y-offsetY)**2)/(phi**2));
            let m = gauss * rS;
            let newY = y + random(-m,m);
            line(x,newY,lastX, lastY);

            // update lastX & lastY
            lastX = x;
            lastY = newY;
        }
    }
}