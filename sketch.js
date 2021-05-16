var b1,b2;
var b3,b4,b5,b6;
var b7,b8,b9,b10;
var b11,b12,b13,b14;
var b15,b16,b17,b18;
var g1,g2,g3,g4,g5;
var o1,o2,o3,o4;
var o5,o6,o7,o8;
var g6,g7,g8,g9;
var l1,l2;
var e1,e2,e3,e4;
var g10,g11;
var ob1,ob2;
var pacman;
var ghost1,ghost2,ghost3,ghost4;
var pacmanImage;

function preload(){
  pacmanImage=loadImage("images/pacman.png");
}

function setup() {
  createCanvas(1200,600);

  b1 = createSprite(600,120,1000,5);
  b1.shapeColor="blue";
  b2 = createSprite(600,460,1000,5);
  b2.shapeColor="blue";

  b3 = createSprite(100,168,5,100);
  b3.shapeColor="blue";
  b4 = createSprite(100,410,5,100);
  b4.shapeColor="blue";
  b5 = createSprite(1100,168,5,100);
  b5.shapeColor="blue";
  b6 = createSprite(1100,410,5,100);
  b6.shapeColor="blue";

  b7 = createSprite(132,220,70,5);
  b7.shapeColor="blue";
  b8 = createSprite(1068,220,70,5);
  b8.shapeColor="blue";
  b9 = createSprite(132,360,70,5);
  b9.shapeColor="blue";
  b10 = createSprite(1068,360,70,5);
  b10.shapeColor="blue";

  b11 = createSprite(164,234,5,30);
  b11.shapeColor="blue";
  b12 = createSprite(164,348,5,30);
  b12.shapeColor="blue";
  b13 = createSprite(1036,234,5,30);
  b13.shapeColor="blue";
  b14 = createSprite(1036,348,5,30);
  b14.shapeColor="blue";

  b15 = createSprite(132,250,70,5);
  b15.shapeColor="blue";
  b16 = createSprite(1068,250,70,5);
  b16.shapeColor="blue";
  b17 = createSprite(132,332,70,5);
  b17.shapeColor="blue";
  b18 = createSprite(1068,332,70,5);
  b18.shapeColor="blue";

  g1 = createSprite(270,220,90,10);
  g1.shapeColor="blue";
  g2 = createSprite(224,290,10,144);
  g2.shapeColor="blue";
  g3 = createSprite(270,360,90,10);
  g3.shapeColor="blue";
  g4 = createSprite(314,330,10,64);
  g4.shapeColor="blue";
  g5 = createSprite(290,300,50,10);
  g5.shapeColor="blue";

  o1 = createSprite(390,360,80,10);
  o1.shapeColor="red";
  o2 = createSprite(350,330,10,64);
  o2.shapeColor="red";
  o3 = createSprite(390,300,80,10);
  o3.shapeColor="red";
  o4 = createSprite(430,330,10,64);
  o4.shapeColor="red";

  o5 = createSprite(503,360,80,10);
  o5.shapeColor="yellow";
  o6 = createSprite(465,330,10,64);
  o6.shapeColor="yellow";
  o7 = createSprite(503,300,80,10);
  o7.shapeColor="yellow";
  o8 = createSprite(545,330,10,64);
  o8.shapeColor="yellow";

  g6 = createSprite(620,300,90,10);
  g6.shapeColor="blue";
  g7 = createSprite(578,318,10,35);
  g7.shapeColor="blue";
  g8 = createSprite(620,338,90,10);
  g8.shapeColor="blue";
  g9 = createSprite(662,318,10,35);
  g9.shapeColor="blue";
  g10 = createSprite(620,370,90,10);
  g10.shapeColor="blue";
  g11 = createSprite(620,392,10,40);
  g11.shapeColor="blue";

  l1 = createSprite(700,300,10,124);
  l1.shapeColor="green";
  l2 = createSprite(742,360,90,10);
  l2.shapeColor="green";

  e1 = createSprite(870,240,100,10); 
  e1.shapeColor="red";
  e2 = createSprite(820,300,10,124);
  e2.shapeColor="red";
  e3 = createSprite(858,300,80,10);
  e3.shapeColor="red";
  e4 = createSprite(870,360,100,10);
  e4.shapeColor="red";

  ob1 = createSprite(180,160,40,10);
  ob1.shapeColor="blue";
  ob2 = createSprite(450,250,200,10);
  ob2.shapeColor="blue";
  ob3 = createSprite(620,250,80,10);
  ob3.shapeColor="blue";
  ob4 = createSprite(580,440,10,40);
  ob4.shapeColor="blue";
  ob5 = createSprite(660,440,10,40);
  ob5.shapeColor="blue";
  ob6 = createSprite(740,200,80,10);
  ob6.shapeColor="blue";
  ob7 = createSprite(870,200,100,10);
  ob7.shapeColor="blue";
  ob8 = createSprite(200,434,10,50);
  ob8.shapeColor="blue";
  ob9 = createSprite(150,420,30,10);
  ob9.shapeColor="blue";
  ob10 = createSprite(300,420,200,10);
  ob10.shapeColor="blue";
  ob11 = createSprite(520,434,50,10);
  ob11.shapeColor="blue";
  

  pacman = createSprite(620,440,20,20);
  pacman.addImage(pacmanImage);
  pacman.scale=0.03;

  ghost1 = createSprite(595,318,10,10);
  ghost2 = createSprite(610,318,10,10);
  ghost3 = createSprite(625,318,10,10);
  ghost4 = createSprite(640,318,10,10);

  for(var i = 110;i<1100;i=i+10){
    var dots = createSprite(i,130,5,5);
  }
  for(var i = 110;i<1100;i=i+10){
    var dots = createSprite(i,140,5,5);
  }
  for(var i = 110;i<1100;i=i+10){
    var dots = createSprite(i,150,5,5);
  }
  for(var i = 110;i<160;i=i+10){
    var dots = createSprite(i,160,5,5);
  }
  for(var i = 210;i<1100;i=i+10){
    var dots = createSprite(i,160,5,5);
  }
}
function draw() {
  background(0);

  if(keyDown("up")){
    pacman.velocityY=-2;
    pacman.velocityX=0;
  }
  if(keyDown("down")){
    pacman.velocityY=2;
    pacman.velocityX=0;
  }
  if(keyDown("right")){
    pacman.velocityX=2;
    pacman.velocityY=0;
  }
  if(keyDown("left")){
    pacman.velocityX=-2;
    pacman.velocityY=0;
  }

  
  drawSprites()

}