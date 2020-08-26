var monkey, monkey_Anim;
var jungle, jungle_img;
var ground;
var banana,banana_img;
var bananaGroup;
var stoneGroup,stone,stone_img;
var score;
function preload(){
monkey_Anim=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  jungle_img=loadImage("junglesnip.JPG");
  banana_img=loadImage("banana.png");
  stone_img=loadImage("stone.png");
}
  
function setup() {
  createCanvas(430, 270);
 
  jungle=createSprite(100,150,10,10);
  
  jungle.addImage("jungle",jungle_img);
  jungle.scale = 0.85;
  jungle.velocityX=-3;
  
  monkey=createSprite(40,100,10,10);
  monkey.addAnimation("monkey",monkey_Anim);
  monkey.scale=0.075;
  
  ground = createSprite(235,260,400,1);
  ground.visible=false;
  
  score=0;
  
  bananaGroup=createGroup();
  stoneGroup= createGroup();
}

function draw() {
  background(220);
  
  monkey.collide(ground);
 
  if(keyDown("space")){
    if(monkey.y>200){
      monkey.velocityY=-15 ;
    }
  }
  monkey.velocityY=monkey.velocityY+0.9;
 if(jungle.x<35){      
 jungle.x=jungle.width/2-100
 }
  if(stoneGroup.isTouching(monkey)){
   stoneGroup.destroyEach(); 
    monkey.scale=0.075;
    
  }
  if(bananaGroup.isTouching(monkey)){
   score=score+1;
    bananaGroup.destroyEach();
  }
    
   spawnbanana();
  drawSprites();
  spawnstone();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,210,40);
  
  switch  (score) {
case 10: monkey.scale=0.095;
        break;
case 20:monkey.scale=0.115;
        break;
case 30: monkey.scale=0.135;
        break;
case 40:monkey.scale=0.155;
        break;
  }
  
}
  function spawnbanana(){
    if(frameCount%80===0){
  banana=createSprite(450,random(100,150),10,10);
    banana.velocityX=-3 ;
      banana.lifetime=250;
      banana.addImage("banana",banana_img);
      banana.scale=0.035;
      bananaGroup.add(banana);
    }
    }
function spawnstone(){
 if(frameCount%120===0){
 stone = createSprite(450,237,10,10);
   stone.addImage("stone",stone_img);
   stone.velocityX=-3;
   stone.lifetime=250;
   stoneGroup.add(stone);
   stone.scale=0.1;
 }
  console.log(jungle.x);
 }


  
  
  
  
  
  
  
