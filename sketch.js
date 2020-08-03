const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var standObject1,standObject2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;  

  ground = new Ground(400,380,800,20);
  
  standObject1 = new Ground(100,320,100,20);

  block1 = new Box(330,235,30,40);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display(); 
  standObject1.display(); 
  block1.display();
  drawSprites();
}