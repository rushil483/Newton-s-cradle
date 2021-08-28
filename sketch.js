
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,300,20)
	bob1 = new Bob(300,350,50);
	bob2 = new Bob(350,350,50);
	rope1 = new Rope(bob1.body,roof.body,-50*2,0)
	rope2 = new Rope(bob2.body,roof.body,-25*2,0);
	bob3 = new Bob(400,350,50);
	rope3 = new Rope(bob3.body,roof.body,0,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

roof.display();
bob1.display();
rope1.display();
bob2.display();
rope2.display();
bob3.display();
rope3.display();
  
  drawSprites();

 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x : -100,y: -100})
	}
}



