var a ;

function setup() {
  createCanvas(1800, 749);
  
  a = PI / 3;
  
  background(37, 23, 73);
}

function draw() {
  
  noStroke();
  fill(255, 227, 225);
  translate(300,300);
  rotate(a);
  circle(-30+a,-30+a,60);
  a = a +0.5;
  
  fill(255, 209, 209);
  translate(300,300);
  rotate(a);
  circle(-30+a,-30+a,60);
  a = a + 0.5
  
  fill(255, 148, 148);
  translate(300,300);
  rotate(a);
  circle(-30+a,-30+a,60);
  a = a + 0.5
  
  fill(184, 232, 252);
  translate(300,300);
  rotate(a);
  circle(-30+a,-30+a,60);
  a = a + 0.5
  
  fill(177,175,255);
  translate(300,300);
  rotate(a);
  circle(-30+a,-30+a,60);
  a = a + 0.5
  
  fill(200, 255, 212);
  translate(300,300);
  rotate(a);
  circle(-30+a,-30+a,60);
  a = a + 0.5
}