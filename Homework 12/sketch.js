 //Variables for my Character
 var characterX=156;
 var characterY=100;
 //Variables for WASD
 var w=87;
 var a=65;
 var s=83;
 var d=68;
 //Variables for Obstacle 1
 var rectX=75;
 var rectY=98;
 var rectXSpeed;
 var rectYSpeed;
 //Variables for Obstacle 2
 var rectX2=22;
 var rectY2=89;
 var rectX2Speed;
 var rectY2Speed;
 //Clicked Shape
 var mouseCircleX;
 var mouseCircleY;

 function setup() {
  createCanvas(400, 500);
  rectXSpeed=Math.floor(Math.random()*(Math.floor(Math.random()*8))+4);
  rectYSpeed=Math.floor(Math.random()*(Math.floor(Math.random()*8))+4);
  createCharacter(156,100);
  createObstacle1(75,98);
  createObstacle2(22,89);
}

function draw() {
  background(32,120,78);
  stroke(0);
  fill(0);
  //borders
  createBorders(15);
  //exit
createExit(24,74);
  //Character
 drawCharacter();
characterMovement();
  //Obstacle 1
drawObstacle1();
obstacle1();
//Obstacle 2
drawObstacle2();
obstacle2();
  //left Exit
exit(74);
    //Mouse Shape

  

}
function createBorders(thickness)
{
  rect(0,0,width,thickness);
  rect(0,height-thickness,width,thickness);
  rect(width-thickness,0,thickness,height-70);
  rect(0,0,thickness,height);
}
function createExit(textsize,exit)
{
  textSize(textsize);
  text("EXIT", width-exit, height-exit);
}
function createCharacter(x,y)
{
  characterX=x
  characterY=y
}
function drawCharacter()
{
  fill(23,43,178);
  rect(characterX,characterY,23,15);
}
function characterMovement()
{
  if(keyIsDown(w))
  {characterY -= 17;}
  if(keyIsDown(s))
  {characterY += 17;}
  if(keyIsDown(a))
  {characterX -= 17;}
  if(keyIsDown(d))
  {characterX += 17;}
}
function createObstacle1(x,y)
{
  rectX=x
  rectY=y
}
function drawObstacle1()
{
  fill(152,7,67);
  rect(rectX,rectY,45,15);
}
function obstacle1()
{
  rectXSpeed=Math.floor(Math.random()*(Math.floor(Math.random()*8))+4);
  rectYSpeed=Math.floor(Math.random()*(Math.floor(Math.random()*8))+4);
  rectX+=rectXSpeed;
  rectY+=rectYSpeed;
  if(rectX>width)
  {rectX=0;}
  if(rectX<0)
  {rectX=width;}
  if(rectY>height)
  {rectY=0;}
  if(rectY<0)
  {rectY=height;}
}
function createObstacle2(x,y)
{
  rectX2=x
  rectY2=y
}
function drawObstacle2()
{
  fill(122,127,67);
  rect(rectX2,rectY2,25,10);
}
function obstacle2()
{
  rectX2Speed=Math.floor(Math.random()*(Math.floor(Math.random()*8))+4);
  rectY2Speed=Math.floor(Math.random()*(Math.floor(Math.random()*8))+4);
  rectX2+=rectX2Speed;
  rectY2+=rectY2Speed;
  if(rectX2>width)
  {rectX2=0;}
  if(rectX2<0)
  {rectX2=width;}
  if(rectY2>height)
  {rectY2=0;}
  if(rectY2<0)
  {rectY2=height;}
}
function exit(placement)
{
  if(characterX>width&&characterY>width-placement)
  {fill(133,77,188);
    stroke(8);
    textSize(50);
    text("YOU WIN!!",width/2-placement,height/2-placement); 
  }
}


