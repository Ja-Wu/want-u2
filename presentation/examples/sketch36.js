function setup() {
  createCanvas(150,200);
}

function draw() {
  background(255);
  noFill();
  stroke(0);
  beginShape();
    vertex(30, 70); // first point
    bezierVertex(25, 25, 100, 50, 50, 100);
    bezierVertex(20, 130, 75, 140, 120, 120);
  endShape();

  ellipse(30, 70, 5);

  ellipse(25, 25, 5);
  ellipse(100, 50, 5);

  ellipse(50, 100, 5);

  ellipse(20, 130, 5);
  ellipse(75, 140, 5);
  
  ellipse(120, 120, 5);
}