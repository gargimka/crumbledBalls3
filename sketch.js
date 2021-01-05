
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper ;
var dust;

function preload()
{
  paper=loadImage("crumpled paper.png");
  dust=loadImage("dustbin img.jpeg");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(400,500,800,50);
  //ball=new Ball(200,400,40);
  box1=new Box(600,250,100,120);
  //box2=new Box(700,250,20,100);
 //box3=new Box(600,300,290,20);
 // box4=new Box(100,450,20,20);
  ball1=new Ball(100,450,20,20);
 

  
}


function draw() {
  Engine.update(engine);
 
  background(0);
  
  ground.display();
  
  box1.display();
  ball1.display();
  //box2.display();
  //box3.display();
 
 
 // Ball.display();
  //ball.display();	
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:16,y:-16});
	}
}


