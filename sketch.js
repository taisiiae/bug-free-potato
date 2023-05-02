// This code draws a grid of circles with random colors and a rectangle that changes color when the mouse is pressed. Additionally, it changes the background color when any key is pressed.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let x = 50; x < width; x += 100) {
    for (let y = 50; y < height; y += 100) {
      fill(random(255), random(255), random(255));
      ellipse(x, y, 50, 50);
    }
  }

  
  if (mouseIsPressed) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  rect(300, 300, 50, 50);
}

function keyPressed() {

  background(random(255), random(255), random(255));
}
