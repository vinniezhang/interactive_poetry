var p1 = false;
var p2 = false;
var song1, song2;

var Ax, Ay;

// function preload(){
// 	song1= loadSound('aud/coffee_aud.wav');
// 	song2 = loadSound('aud/skate_aud.wav');
// }

function setup(){
	var canvas = createCanvas(windowWidth, windowHeight);

	Ax = windowWidth/3;
	Ay = windowHeight/2;

	noStroke();
	rectMode(CENTER);
}

function draw(){

	background(color(0));

	fill(color(0));
	// fill(color(0));
	rectMode(CENTER);
	noStroke();
	rect(windowWidth/3, windowHeight/2, 400, 200);
	fill(color(255));
	textFont("times new roman");
	textSize(75);
	text("P O E M 1", windowWidth/3-280, windowHeight/2);

	fill(color(0));
	// fill(color(0));
	rectMode(CENTER);
	noStroke();
	rect(2*windowWidth/3+20, windowHeight/2, 400, 200);
	fill(color(255));
	textFont("times new roman");
	textSize(75);
	text("P O E M 2", 2*windowWidth/3-175, windowHeight/2);

	console.log(mouseIsPressed);
	console.log("x: " + mouseX);
	console.log("y: " + mouseY);

	if ((mouseX < windowWidth/2) && mouseIsPressed == true){
		window.location.href = "sticky_index.html";
	} 

	if ((mouseX > windowWidth/2) && mouseIsPressed == true){
		window.location.href = "untitled_index.html";
	} 

	// if (((Ax-200) <= mouseX && mouseX <= (Ax+200)) && ((Ay-100) <= mouseY && mouseY <= (Ay+100)) && mouseIsPressed == true){
	// 	window.location.href = "sticky_index.html";
	// }  

	// else if((((2*Ax)-220) < mouseX && mouseX < ((2*Ax)+180)) && ((Ay-100) < mouseY && mouseY < (Ay+100)) && mouseIsPressed == true){
	// 	window.location.href = "untitled_index.html";

	// }
}

// function mouseClicked() {

// 	if ((Ax-200) < mouseX && mouseX < (Ax+200) && (Ay-100) < mouseY && mouseY < (Ay+100)){
// 		window.location.href = "sticky_index.html";
// 	}

// 	if (((2*Ax)-220) < mouseX && mouseX < ((2*Ax)+180) && (Ay-100) < mouseY && mouseY < (Ay+100)){
// 		window.location.href = "untitled_index.html";
// 	}
// }