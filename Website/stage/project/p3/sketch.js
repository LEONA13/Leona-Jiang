 function setup() {
   createCanvas(1800, 749);
   background(73, 85, 121);
  
  for(i=1;i< 10; i++){
    fill(random(561),random(492),random(683));
  
    noStroke();
    
    beginShape();
    vertex(random(0,1800),random(0,749));
    bezierVertex(random(749),random(749),random(749),random(749),random(749),random(749));
    endShape();
    
}
    
  
}

function draw() {
 
}

function mousePressed(){
  
 for(i=1;i< 10; i++){
    fill(random(523),random(858),random(423));
  
    noStroke();
    
    beginShape();
    vertex(random(0,1800),random(0,749));
    bezierVertex(random(749),random(749),random(749),random(749),random(749),random(749));
    endShape(); }
  

}
