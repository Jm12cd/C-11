
function preload(){
  shipImg = loadAnimtion("ship-1.png", "ship-2.png");
  seaImg = loadImage("sea.png");
}
function setup(){
  createCanvas(400,400);
 if(sea.x < 0){
    sea.x = sea.witdth/2;
  }
}

function draw() {
  background("blue");
    drawSprites();
    spriteName.addImage(seaImg);
    spriteName.addAnimation("ship-1.png", "ship-2.png");
  
}
