var space = new Image();
var earth = new Image();

function init(){
	space.src = "assets/stars.jpg";
	earth.src = "assets/Earth.png";
}

function draw() {
	var ctx = document.getElementByID("canvas").getContext("2d");

	ctx.globalCompositeOperation = "destination-over";
	ctx.clearRect(0,0,1000,900);

	ctx.fillStyle = "rgba(0,0,0,0.4)";
	ctx.strokeStyle = "rgba(0,153,255,0.4)";
	ctx.save();
	ctx.translate(150,150);
}