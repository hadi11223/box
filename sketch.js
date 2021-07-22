var box;
function setup() {
  createCanvas(800,800);
  box = createSprite(200,200,20,20)
}

function draw() 
{
  background('red');
  if(keyIsDown(RIGHT_ARROW)){
    box.velocityX =10
    

  }
  if(keyIsDown(LEFT_ARROW)){
    box.velocityX=-10
  }
  if(keyIsDown(UP_ARROW)){
    box.velocityY=-10
  }
  if(keyIsDown(DOWN_ARROW)){
    box.velocityY=10
  }
drawSprites()

}




