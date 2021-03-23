var movingR,stableR

function setup() {
  createCanvas(800,400);
  movingR=createSprite(400, 200, 50, 50);
  stableR = createSprite(200, 300, 50, 50);
}

function draw() {
  background("yellow"); 

  movingR.x = World.mouseX; 
  movingR.y = World.mouseY;

  console.log(movingR.x-stableR.x)
  if(movingR.x-stableR.x<stableR.width/2+movingR.width/2 && stableR.x-movingR.x<stableR.width/2+movingR.width/2
    && movingR.y-stableR.y<stableR.width/2+movingR.width/2 && stableR.y-movingR.y<stableR.width/2+movingR.width/2 ){
    movingR.shapeColor="blue"
    stableR.shapeColor="red"
  }else{
    movingR.shapeColor="grey"
    stableR.shapeColor="grey"
  }

  drawSprites();
}