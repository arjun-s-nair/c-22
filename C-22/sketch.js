const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world, box, ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  
  var options = {
    restitution : 0.8,
    friction : 1,
    density : 1
  }
  
  box = Bodies.circle(200,100,15,options)
  World.add(world,box)

  var options2 = {
    isStatic : true
  }

  ground = Bodies.rectangle(0,390,800,20,options2)
  World.add(world,ground)
}

function draw() {
  background("black");  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(box.position.x,box.position.y,15)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,800,20)
}