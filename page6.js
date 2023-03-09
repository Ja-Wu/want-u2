alert("ayyooo i didn't code anything here ... yet");

const Y_AXIS = 1;
const X_AXIS = 2;
let canvas;
let b1, b2, c1, c2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  // Define colors
  b1 = color(32);
  b2 = color(0);

  noLoop();
}

function draw() {
    // Background
    setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
    setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
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