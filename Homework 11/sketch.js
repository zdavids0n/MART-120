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
  
  
  
  
}

function draw() {
  background(32,120,78);
  stroke(0);
  fill(0);
  rect(0,0,width,15);
  rect(0,height-15,width,15);
  rect(width-15,0,15,height-70);
  rect(0,0,15,height);
  //exit
  textSize(24);
  text("EXIT", width-74, height-74);
  //Character
  fill(23,43,178);
  rect(characterX,characterY,23,15);
  if(keyIsDown(w))
  {characterY -= 17;}
  if(keyIsDown(s))
  {characterY += 17;}
  if(keyIsDown(a))
  {characterX -= 17;}
  if(keyIsDown(d))
  {characterX += 17;}
  //Obstacle 1
  fill(152,7,67);
  rect(rectX,rectY,45,15);
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
  //left Exit
  if(characterX>width&&characterY>width-74)
  {fill(133,77,188);
    stroke(8);
    textSize(50);
    text("YOU WIN!!",width/2-74,height/2-74); 
  }
  fill(122,127,67);
  rect(rectX2,rectY2,25,10);
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
    //Mouse Shape
    fill(220,75,8);
    circle(mouseCircleX,mouseCircleY,30);
  

}

