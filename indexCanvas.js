const Y_AXIS = 1;
const X_AXIS = 2;
let canvas2;
let b1, b2, c1, c2;

function setup() {
  canvas2 = createCanvas(windowWidth, windowHeight);
  canvas2.position(0, 0);
  canvas2.style('z-index', '-2');

  // Define colors
  b1 = color(40, 40, 80);
  b2 = color(0, 0, 40);

  noLoop();
}

function draw() {
    // Background
    setGradient(0, 0, width, height, b1, b2, Y_AXIS);
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