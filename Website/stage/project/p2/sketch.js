var img;
var x = 100;
var y = 100;
var t = 0;

function preload(){
 img = loadImage('./firework.jpeg');
}


function setup() {
  createCanvas(1800, 749);
  background(220);
  
  image(img,0,0);
}

function draw() {
  
  
  x = width*noise(t);
  y = height*noise(t+50);
  
  var c = img.get(x, y);//get(mouseX, mouseY)
  
  fill(c);
  noStroke();
  ellipse(x, y, 100,100);
  
  t += 0.005;
}