const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var string1;
//function preload(){}

function setup() {
	createCanvas(800,700); 

	engine = Engine.create();
	world = engine.world;

	Roof = new roof(250,50,200,15);

	bob1 = new bob(210,400);
	bob2 = new bob(230,400);
	bob3 = new bob(250,400);
	bob4 = new bob(270,400);
	bob5 = new bob(290,400);

	bobDiameter=20; 
	rope1=new rope(bob1.body,Roof.body,-bobDiameter*2, 0); 
	rope2=new rope(bob2.body,Roof.body,-bobDiameter*1, 0); 
	rope3=new rope(bob3.body,Roof.body,0, 0); 
	rope4=new rope(bob4.body,Roof.body,bobDiameter*1, 0); 
	rope5=new rope(bob5.body,Roof.body,bobDiameter*2, 0); 

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightgray");

  rope1.display(); 
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display(); 

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  Roof.display();
  
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20}); 
	} 
}

