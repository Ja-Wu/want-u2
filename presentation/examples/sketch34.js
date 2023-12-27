let totalPoints = 0;
let circlePoints = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(width / 2, height / 2, width, height);

  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);

    let d = dist(x, y, width / 2, height / 2);
    totalPoints++;

    if (d < width / 2) {
      circlePoints++;
      stroke(0, 0, 255, 100);
    } else {
      stroke(255, 0, 0, 100);
    }

    point(x, y);
  }
}
