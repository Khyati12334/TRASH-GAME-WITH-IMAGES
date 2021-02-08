
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObject,paperObject,groundObject;
var world;

function preload()
{

}


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject = new Paper(200,450,70);

	groundObject = new Ground(600,height,1200,20);

	dustbinObj=new Dustbin(800,580);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  

  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-125});

  }
}
