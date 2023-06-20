const bubbles = [];
let canvas;
let h;
let speed;
let isOn = true;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
  //canvas.position(0, 0);
  //canvas.style('z-index', '-1');
  colorMode(HSB, 360, 100, 100, 100);
  speed = 4;

  h = floor(random(360*speed));
  for(let i=0; i<floor(windowWidth/60) + 5; i++){
    bubbles.push(new Bubble());
  }
}

function draw() {
    if(isOn){background(0)}
    if(h < speed * 360){
        h++;
    } else {
        h = 0;
    }
    bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw(floor(h/speed));
    })
}

function toggleSwitch() {
    var toggleBtn = document.getElementById("toggle");
    if (toggleBtn.checked) {
        isOn = false;
    } else {
        isOn = true;
    }
  }

class Bubble{
    constructor(){
        this.pos = createVector(random(width), random(height));
        this.vel = floor(random(1, 15));
        if(this.vel > 7 && random(1) > 0.4){
            this.vel = floor(this.vel/2);
        }
        this.size = random(5, 30);
    }

    update(){
        this.pos.y -= this.vel;
        if(this.pos.y < -100){
            this.pos = createVector(random(width), height+random(50, 250));
            this.vel = floor(random(1, 15));
            if(this.vel > 7 && random(1) > 0.3){
                this.vel = floor(this.vel/2);
            }
            this.size = random(5, 50);
        }
    }

    draw(h){
        fill(h, 90, 90, 60);
        circle(this.pos.x, this.pos.y, this.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}