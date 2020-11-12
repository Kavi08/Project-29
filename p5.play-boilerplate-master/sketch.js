const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var box1,box2,box3,box4,box5,box6
var ball
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,200,20,20);
  box2 = new Box(220,200,20,20);
  box3 = new Box(240,200,20,20);
  box4 = new Box(210,180,20,20);
  box5 = new Box(230,180,20,20);
  box6 = new Box(220,160,20,20);
  box7 = new Box(300,200,20,20);
  box8 = new Box(320,200,20,20);
  box9 = new Box(340,200,20,20);
  box10 = new Box(310,180,20,20);
  box11 = new Box(330,180,20,20);
  box12 = new Box(320,160,20,20);

  ball = createSprite(20,20,mouseX,mouseY);

  slingshot = new SlingShot({x:100, y:100});
}

function draw() {
  background(255,255,255);  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  slingshot.display();  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }
}