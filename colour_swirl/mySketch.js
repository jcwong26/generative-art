let radius = 20;
let x;
let y;
let angle = 0;
let colour = 0;
let count = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB);
	frameRate(50);
}

function draw() {
	midX = windowWidth/2;
	midY = windowHeight/2;
	x = midX + radius*cos(angle);
	y = midY + radius*sin(angle);
	
	noStroke();
	fill(colour,count*15,100);
	ellipse(x,y,8);
	
	colour++;
	radius++;
	angle++;
	count++;
	if(count===7){
		count = 1;
	}
}