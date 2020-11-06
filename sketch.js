
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score
var invisibleGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(100,150,20,20);
monkey.addAnimation("running", monkey_running);
  invisibleGround = createSprite(600,height,600,50);
  monkey.scale=0.15;
  FoodGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {
 createCanvas(600,300);
  background(250);
  console.log(frameCount);
  if(keyDown("space")&&monkey.y>=100){
    monkey.velocityY=-12;
    
  }
  monkey.velocityY=monkey.velocityY+1;
  spawnObstacles();
  spawnFood();
drawSprites();
  //console.log(getFrameRate());
}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
  
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
     obstacle = createSprite(600,180,10,40);
    obstacle.scale=0.2;
    obstacle.velocityX=-3;
   
    obstacle.addImage("stone", obstacleImage);
    
              
   
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
    
  }
}





