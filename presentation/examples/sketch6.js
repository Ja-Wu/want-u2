function setup(){
    createCanvas(600,600);
    background(255);

    colors = [];
    let possibleLengths = [];
    for(let i=10; i<width; i++){
        if(width%i === 0){
            possibleLengths.push(i);
        }
    }
    let len = possibleLengths[Math.floor(random(0,possibleLengths.length))];

    for(let i=0; i<5; i+=1){
        colors.push([Math.floor(random(0,256)), Math.floor(random(0,256)), Math.floor(random(0,256))]);
    }

    console.log(colors);

    for(let y=0; y<height; y += len){
        for(let x=0; x<width; x += len){
            let c = colors[Math.floor(random(0,colors.length))];
            fill(c[0], c[1], c[2]);
            square(x,y, len);
        }
    }
}