const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
playerBase = new PlayerBase(300,450,180,150);
player = new Player(350,370,50,180)
computerBase = new ComputerBase(1200,500,180,150);
Computerplayer = new Player(1200,350,50,180)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
playerBase.display();
computerBase.display();

   //display Player and computerplayer
player.display();
Computerplayer.display();

}
