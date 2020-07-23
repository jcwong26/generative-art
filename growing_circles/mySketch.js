size = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200,240,240);
}

function draw() {
  
  if(mouseIsPressed) {
    //outlined and filled ellipse
    fill(209,105,152);
    stroke(26,94,37);
    strokeWeight(10);
    ellipse(mouseX,mouseY,size);
    size = size + 5;
    
  }
  
  if(keyIsPressed) {
    background(200,240,240);
    size = 15;
  }
}