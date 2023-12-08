let canvas;
let curSlide = 0;

function setup() {
  console.log(Reveal.getIndices());
  let container1 = document.getElementById('sketch-container-1');
  let container2 = document.getElementById('sketch-container-2');
  let container3 = document.getElementById('sketch-container-3');

  // Check if containers exist before creating the canvas
  if (curSlide == 7) {
    console.log(curSlide);
    let canvas1 = createCanvas(600, 600);
    canvas1.parent(container1);
    background(220);
    // Draw your p5.js sketch for image 1 here

    let space = 40;
    let n = 40;

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

  if (curSlide == 8) {
    let canvas2 = createCanvas(600, 600);
    canvas2.parent(container2);
    background(220);

    let space = 40;
    let n = 20;

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

  if (curSlide == 9) {
    let canvas3 = createCanvas(600, 600);
    canvas3.parent(container3);
    // Draw your p5.js sketch for image 3 here

    background(220);
    // Draw your p5.js sketch for image 1 here

    let space = 40;
    let n = 10;

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
}

document.addEventListener('DOMContentLoaded', function() {
  let reveal = Reveal();

  reveal.addEventListener('slidechanged', function(event) {
      curSlide = Reveal.getIndices().h;
      // console.log(curSlide);

      if(curSlide == 7 || curSlide == 8 || curSlide == 9){setup();}
  });
});