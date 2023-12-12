function setup() {
    let space = 40;   // space to image border
    let n = 20;       // line lenght
    createCanvas(600, 600);
    background(220);
    
    for(let y = space; y < width - space; y += n){
      for(let x = space; x < height - space; x += n){
        if(random() < 0.5){
          line(x, y, x + n, y + n);
        } else {
          line(x + n, y, x, y + n);
        }
      }
    }
  }