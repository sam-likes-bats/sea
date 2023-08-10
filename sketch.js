var ship, sea,seaImage,shipAnimation;

function preload(){
  seaImage=loadImage("sea.png");
  shipAnimation=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png","ship-3.png","ship-2.png","ship-1.png");
}
//eu nao consegui fazer o movimento do mar, a condicao IF dava errado
function setup(){
createCanvas(400,400);
  
  sea=createSprite(200,200,30,30);
  sea.addImage(seaImage,"sea.png");
  sea.scale=0.3;

  ship=createSprite(200,200,20,40);
  ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png","ship-3.png","ship-2.png","ship-1.png",shipAnimation);
  ship.scale=0.2;

}

function draw() {
  background("blue");
  drawSprites();
 
}
