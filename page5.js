const rangeSlider = document.getElementById("range-slider");

var canvas;
var w1 = innerWidth-1;
var h1 = innerHeight-1;

var points = [];
var multiply;
var randomOffset = 15;
var pauseAnimation = false;
var curFrame = 0;

var r1;
var r2;
var b1;
var b2;
var g1;
var g2;
var alphaValue;

function setup() {
  curFrame = 0;
  points = [];
  canvas = createCanvas(w1, h1);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  if(!pauseAnimation){
    background(0);

    var density = rangeSlider.value;
    let space = w1/density;

    if(density <= 10){
      alphaValue = 124;
    } else if(density <= 20){
      alphaValue = 96;
    } else if(density <= 30){
      alphaValue = 64;
    } else if(density <= 40){
      alphaValue = 48;
    } else {
      alphaValue = 32;
    }

    for(var x=0; x<=w1; x+=space) {
      for(var y=0; y<h1; y+=space){
        var p = createVector(x + random(-randomOffset, randomOffset), y + random(-randomOffset, randomOffset));
        points.push(p);
      }
    }

    angleMode(DEGREES);
    noiseDetail(1);

    r1 = random(255);
    r2 = random(255);
    g1 = random(255);
    g2 = random(255);
    b1 = random(255);
    b2 = random(255);

    multiply = random(0.002, 0.008);
  }
}
  
function draw() {
  if(curFrame < 1200){
    noStroke();
    if(!pauseAnimation){
      for(var i=0; i<points.length; i++){
        if(points[i].y < h1){
          var r = map(points[i].x, 0, width, r1, r2);
          var g = map(points[i].y, 0, height, g1, g2);
          var b = map(points[i].x, 0, width, b1, b2);

          fill(r, g, b, alphaValue);

          var angle = map(noise(points[i].x * multiply, points[i].y * multiply), 0, 1, 0, 360);

          points[i].add(cos(angle), sin(angle));

          
          ellipse(points[i].x, points[i].y, 2);
        }
      }
    }
    curFrame++;
  } else {
    setup();
  }
}

rangeSlider.addEventListener('input', () => {
  if(rangeSlider.value == 5){
    pauseAnimation = true;
  } else {
    pauseAnimation = false;
  }
  setup();
});