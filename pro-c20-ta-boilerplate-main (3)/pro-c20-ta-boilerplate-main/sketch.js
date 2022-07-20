//namespacing-used to give shorter names 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//declare global variables 
let engine;
let world;
var ball;
var ball2;
var ground;

function setup()
{
  createCanvas(400,400);
  //step 1: create the engine
  engine = Engine.create();
  //step 2: create the world
  world = engine.world;

  //step 3: create the ball object and change the properties of it
  var ball_options={
    restitution: 0.95,
    frictionAir: 0.01
  }
  ball = Bodies.circle(100, 10, 20, ball_options);
  //step 4: adding the ball object to the world 
  World.add(world, ball);
  
  //create the ground
  var ground_options={
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,10, ground_options);
  World.add(world, ground);

  //create the rock 
  var rock_options={
    restitution: 0.15,
    frictionAir: 0.60
  }
  ball2 = Bodies.circle(300, 10, 20, rock_options); 
  World.add(world, ball2);
}

function draw() 
{
  background(51);
   Engine.update(engine);
   //creating ball
  ellipse(ball.position.x, ball.position.y, 20, 20);
  //rectMode will position the center of the object at the given position. 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);

  //creating the rock 
  ellipse(ball2.position.x, ball2.position.y, 20, 20);
}

