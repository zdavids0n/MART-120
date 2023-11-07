var headX=190;
var headY=200;
var headDirection=2;

var bodyX=155;
var bodyY=266;
var bodyDirection=5;

var size=34;
var count=0;
var sizeDirection=2;

var eyeX=165;
var eyeY=190;
var eyeDirection=3;

var armX=140;
var armY=266;
var armDirection=8;

var sizeX=34;
var countX=4
var sizeXdirection=5;

var legsX=90;
var legsY=398;
var legsDirection=7;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220,123,12);
  fill('black');
  text ("Self Portrait!", 20, 80);
  textSize (sizeX);
  sizeX+=sizeXdirection;
  countX++;
  if(countX>30)
  {
    sizeXdirection *=-1;
    countX=3;
  }

  //Head
  fill('green');
  circle(headX,headY,112);
  headX+=headDirection;
  if(headX>=320||headX<=57)
  {
    headDirection *= -1;
  }

  //Eyes
  strokeWeight(10);
  fill (0);
  point(eyeX, eyeY);
  eyeX+=eyeDirection;
  if(eyeX>=350||eyeX<=75)
  {
    eyeDirection *=-1;
  }
  point(210,190);

  //Nose
  strokeWeight(20);
  point (190,200)

  //Mouth
  ellipse(190,230,25,15);

  //Arm
  fill('green');
  triangle(200,290,250,290,360,420);

  //Body
  fill('green');
  rect(155,bodyY,80,200);
  bodyY+=bodyDirection;
  if(bodyY<=0||bodyY>=476)
  {
    bodyDirection *=-1;
  }

  //Hat
  line(120,175,175,130);

  //Arm
  fill('green');
  rect(140,armY,30,150);
  armY+=armDirection;
  if(armY<=0||armY>=520)
  {
    armDirection *=-1;
  }

  //Legs
  fill('green');
  rect(legsX,legsY,200,60);
  legsX+=legsDirection;
  legsY+=legsDirection;
  if(legsX>=100||legsX<=36)
  if(legsY>=100||legsY<=36)
  {
    legsDirection*= -1;
  }

  //Signature
  fill('black');
  textSize(size);
  size+=sizeDirection;
  count++;
  if(count>38)
  {
    sizeDirection *=-1;
    count=0;
  }
  text("Zachery Davidson",70,500);



}
