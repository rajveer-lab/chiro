var chiro,chiroImg ;
var ground;
function preload(){
//variable name =loadAnimation("name of the image");
chiroImg=loadAnimation("boy1.png","boy2.png","boy3.png");
}



function setup() {
  createCanvas(1200,400);
//sprite=createSprite(x,y,w,h);
chiro =createSprite(20,300,50,50);
// sprite.addAnimation("lable",variable name);
chiro.addAnimation("chiro_walking",chiroImg);
chiro.scale=0.5;
chiro.x=60;
edges=createEdgeSprites();



ground=createSprite(200,390,400,10);
ground.velocityX=-4


}


function draw() {
  background(255,255,255);  

if(keyDown("space")){
  chiro.velocityY=-15;
}
chiro.velocityY=chiro.velocityY+0.5;

if(ground.x<0){
  ground.x=ground.width/2;
}
chiro.collide(edges);


  drawSprites();
} 