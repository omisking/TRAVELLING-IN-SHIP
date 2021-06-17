var ship
var seaImage;
var sea;
var ship2;
function preload(){
  ship_bobbing = loadAnimation("ship-1.png","ship-2.png");
  ship2 = loadAnimation("ship-3.png","ship-4.png")
 seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  
  sea = createSprite(200,200);

  sea.addImage("sea",seaImage)
  sea.scale = 0.3

  sea.velocityX = -2;
 
  ship = createSprite(100,160,20,50);
  ship.addAnimation("bobbing", ship_bobbing);
  edges = createEdgeSprites();

  ship.scale = 0.3;
 
  
}


function draw(){

  background("white");
  
  console.log(sea.y)
  
 
  if(keyDown("space")){
     ship.addAnimation("bobbing",ship2)
  }

 if(sea.x < 0){
   sea.x = 200;
 }
  
 
 
  
  
  drawSprites();
}

