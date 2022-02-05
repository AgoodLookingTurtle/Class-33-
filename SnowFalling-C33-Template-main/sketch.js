const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var s1,s2;











function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  s1 = new Snow(50,0);
  console.log(s1);
}


function draw() {


  background(black); 
  
  Engine.update(engine);

  s1.display()
}


