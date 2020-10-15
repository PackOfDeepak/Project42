var hr, sec, min;
function setup() {
  createCanvas(800,400);
  hr = hour();
  sec = second();
  min = minute();
  angleMode(DEGREES);
}
scAngle = map(sc, 0, 60, 0, 360);
minAngle = map(min, 0, 60, 0, 360);
hrAngle = map(hr, 0, 12, 0, 360);
push();
rotate(scangle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop()
push();
rotate(minAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
push();
rotate(hrAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
function draw() {
  background(255,255,255);  
  drawSprites();
}