
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth-100, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={isStatitic:false, restitution:0.2, friction:0, density:1.2}
	ball = Bodies.circle(200,10,20,ball_options);
	World.add(world, ball);

    top_wall =new Ground((windowWidth-100)/2,10,windowWidth,2);
    fill("yellow");
	groundObj =new Ground((windowWidth-100)/2,480,windowWidth,15);
	leftSide =new Ground(800,415,15,120);
	rightSide =new Ground(1000,415,15,120);

	rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
  background(0);
  
  ellipse(ball.position.x,ball.position.y,10);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  top_wall.display();

  Engine.update(engine);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1.5,y:0.9});
	}
}



