

var sun = new Image();
var moon = new Image();
var earth = new Image();
var mercury = new Image();
var venus = new Image();
var mars = new Image()

function init(){
  sun.src = 'assets/starsWeb.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'assets/earthWeb1.png';
  mercury.src = 'assets/mercury.png';
  venus.src = 'assets/venus.png';
  mars.src = 'assets/mars';
  window.requestAnimationFrame(draw);
  //window.requestAnimationFrame(mercury);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,500,500); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

 //mercury
   ctx.save();
   var mercTime = new Date();
   ctx.rotate(((2*Math.PI)/6)*mercTime.getSeconds() + ((2*Math.PI)/6000)*mercTime.getMilliseconds());
   ctx.translate(29,43);//closest to sun at 29m miles and furthest at 43m miles
   ctx.drawImage(mercury,-4,-4);
   ctx.restore();

  //venus
   ctx.save();
   var vTime = new Date();
   ctx.rotate(((2*Math.PI)/6)*vTime.getSeconds() + ((2*Math.PI)/6000)*vTime.getMilliseconds());
   ctx.translate(66,68);//closest to sun at 66.7m miles and furthest at 67.7m miles
   ctx.drawImage(venus,-9,-9);
   ctx.restore();

   //mars
   ctx.save();
   var vTime = new Date();
   ctx.rotate(((2*Math.PI)/400)*vTime.getSeconds() + ((2*Math.PI)/600000)*vTime.getMilliseconds());
   ctx.translate(145,0);
   ctx.drawImage(mars,-10,-10);
   ctx.restore();

  // Earth
  var time = new Date();
  ctx.rotate(((2*Math.PI)/58)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds());
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  // Moon
  ctx.save();
  ctx.rotate(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds());
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();


  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  //ctx.arc(50,50,105,0, Math.PI*2, false);
  ctx.stroke();
 
  ctx.drawImage(sun,0,0,300,300);

  window.requestAnimationFrame(draw);
}


init();