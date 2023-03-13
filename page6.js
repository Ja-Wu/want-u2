const Y_AXIS = 1;
const X_AXIS = 2;
let canvas;
let b1, b2, c1, c2;
let lastX, lastY
let vertical = false;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  colorMode(HSB, 360, 100, 100);
  lastX = mouseX;
  lastY = mouseY;

  // Define colors
  b1 = color(floor((360*mouseX)/ windowWidth), 100, 100);
  b2 = color(floor((360*mouseY)/ windowHeight), 100, 100);
}

function draw() {
  if(lastX != mouseX || lastY != mouseY){
    b1 = color(floor((360*mouseX)/ windowWidth), 100, 100);
    b2 = color(floor((360*mouseY)/ windowHeight), 100, 100);
    // Background
    if(vertical){
      setGradient(0, 0, width, height/2, b1, b2, Y_AXIS);
      setGradient(0, height/2, width, height/2, b2, b1, Y_AXIS);
    } else {
      setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
      setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
    }
    

    // show blended colors at mouse position
    fill(b1);
    rect(mouseX, mouseY, 10, 20);
    fill(b2);
    rect(mouseX+10, mouseY, 10, 20);
    lastX = mouseX;
    lastY = mouseY;
  }
}

function mouseClicked(){
  vertical = !vertical;
  lastX++;
}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }