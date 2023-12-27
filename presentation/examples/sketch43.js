let totalPoints = 200;
let radius = 150;

function setup() {
  createCanvas(400, 400);
  background(255);
  translate(width / 2, height / 2);
  fill(0);
  
  for (let i = 0; i < totalPoints; i++) {
    let angleA = map(i, 0, totalPoints, 0, TWO_PI);
    let xA = cos(angleA) * radius;
    let yA = sin(angleA) * radius;

    // Modular arithmetic to create symmetrical design
    let angleB = (angleA * 5) % TWO_PI; // Adjust the multiplier for different designs
    let xB = cos(angleB) * radius;
    let yB = sin(angleB) * radius;

    line(xA, yA, xB, yB);
  }
}
