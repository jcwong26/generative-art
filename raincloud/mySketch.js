let raindrops = [];
let r_size = 8;
let light = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	dblue = color(10, 112, 245);
	lblue = color(135, 208, 250);
	orange = color(232, 81, 26);
}

function draw() {
	//background(196, 227, 255);
	sky(light);
	rainfall();	
	cloud();
	if(mouseIsPressed) {
		rain(mouseX,mouseY);
	}
}

function keyPressed() {
	light = !light;
}

function sky(light) {
	if(light) {
		c2 = lblue;
	}
	else {
		c2 = orange;
	}
	
	//Gradient background
	for (let i = 0; i <= windowHeight; i++) {
      let inter = map(i, 0, windowHeight, 0, 1);
      let c = lerpColor(dblue, c2, inter);
      stroke(c);
      line(0, i, windowWidth, i);
  }
}

class Raindrop {
	constructor(x,y,size,velocity) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.velocity = velocity;
	}
	
	update() {
		this.y += this.velocity;
	}
	
	draw() {
		noStroke();
		fill(190, 227, 237);
		for (let j = 2; j < this.size; j++ ) {
      ellipse(this.x, this.y + j*4, j*2, j*2);
  	}
	}	
}


function cloud() {
	noStroke();
	fill(255);
	ellipse(mouseX,mouseY,140);
	ellipse(mouseX+65,mouseY+15,100);
	ellipse(mouseX-65,mouseY+20,90);
	ellipse(mouseX+110,mouseY+30,50);
	ellipse(mouseX-105,mouseY+30,60);
}

function rainfall() {
  for(let i = 0; i<raindrops.length; i++) {
  	raindrops[i].update();
		raindrops[i].draw();
		if(raindrops[i].y > windowHeight) {
			raindrops.splice(i,1);
		}
  }
}

function rain(x,y) {
	let r_num = 3;
	for (let i = 1; i < r_num; i++) {
		x_pos = x + random(-120,120);
		y_pos = y + 30;
		size = random(4,6);
		velocity = random(5,10);
		drop = new Raindrop(x_pos,y_pos,size,velocity);
		append(raindrops, drop);		 
	}
}
