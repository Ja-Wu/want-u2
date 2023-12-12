function setup(){
    createCanvas(600,600);
    background(220);

    let rS = 10;        // how much randomness is in the color selection

    let ran = 50;
    let possibleLen = [10,20,25,50];
    let len = possibleLen[Math.floor(random(0,possibleLen.length))];

    noStroke();

    let r;
    let g;
    let b;
    let randomColor = Math.floor(random(0,3));
    
    for(let y = ran; y < height-ran; y += len){
        for(let x = ran; x < width-ran; x += len){
            r = random(0,rS);
            g = random(0,rS);
            b = random(0,rS);
            
            if(randomColor === 0){
                r = map(y, ran, width-ran, rS, 255-rS) + random(-rS,rS);
            } else if(randomColor === 1){
                g = map(y, ran, width-ran, rS, 255-rS) + random(-rS,rS);
            } else {
                b = map(y, ran, width-ran, rS, 255-rS) + random(-rS,rS);
            }
            fill(r,g,b);
            square(x,y,len);
        }
    }
}