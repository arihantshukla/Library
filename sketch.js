var movingRect
var fixedRect

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 300, 50, 50);
  movingRect.velocityX=0;
  movingRect.velocityY=-3;
  fixedRect=createSprite(400,100,50,100);
  fixedRect.velocityX=0;
  fixedRect.velocityY=3; 
}


function draw() {

  background(255,255,255);  
  bounceOff(movingRect,fixedRect);
  drawSprites();
}
