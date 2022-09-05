var ship, shipImg
var ship_floating
var seaImg;
var sea;
var i;
var invisibleGround

function preload(){
ship_floating = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
sea = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png");
}






function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addImage("sea.png",seaImg);
  ship_floating = createSprite(200,200,100,50);
  ship_floating.addAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  sea.x = 50;
}

function draw() {
  background("blue");
    sea.velocityX=50;
    if (sea.x < 0){
      sea.x = sea.width/2;}
  
  
  
  drawSprites();

 
}
