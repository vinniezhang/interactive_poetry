
var millisClock = 0;
var i = 0;
var millisInterval = 1625;
var startTime;
var song;

var stickyLines;
var clicked = false;
var yesClicked = false;
var begin = "(click to begin poem)";

var reset = "(click for the full poem)";
var timeOutInterval = 28500;

function preload(){
	stickyLines = loadStrings('text/sticky.txt');
	song = loadSound('aud/skate_aud.wav');
}

function setup(){
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.attribute('onclick', 'playAudio()');

	textAlign(CENTER, CENTER);
	textSize(80);
}

function startPlay(){
	setInterval(textIndex, millisInterval);
	startTime = millis();
	clicked = true;
}

function draw(){

	millisClock = millis();

	if (clicked == true){

		background(color(163, 78, 85));
		fill(color(239, 226, 198));
		textSize(100);
		textFont("times new roman");
		text(stickyLines[i], windowWidth/2, windowHeight/2);

	} else {
		background(color(163, 78, 85));
		fill(color(239, 226, 198));
		textSize(60);
		textFont("times new roman");
		text(begin, windowWidth/2, windowHeight/2);
	}

	if (millisClock - startTime > timeOutInterval){
		buttonStart();
	}
}

function buttonStart(){
	fill(color(163, 78, 85));
	rectMode(CENTER);
	noStroke();
	rect(windowWidth/2, windowHeight/2, 300, 200);
	fill(color(239, 226, 198));
	textSize(40);
	text(reset, windowWidth/2, windowHeight/2);
	yesClicked = true;
}

function mouseClicked() {
	if (yesClicked == true){
		window.location.href = "sticky_text.html";
	}
}

function textIndex(){
	i++;
}

function playAudio(){
	if(!song.isPlaying()){
		song.play();
		clicked = true;
	}
}

document.querySelector('body').addEventListener('click', function() {
  song.output.context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});