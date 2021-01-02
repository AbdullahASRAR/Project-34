
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;
function setup() {
  canvas=createCanvas(1000,700);

	engine = Engine.create();
  world = engine.world;
  let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let option={
    mouse:canvasmouse
  };
  mConstraint=MouseConstraint.create(engine,option);
  World.add(world,mConstraint);
	roof=new Roof(400,100,400,30);
	bob1=new Bob(240,400,40)
	bob2=new Bob(320,400,40)
  bob3=new Bob(400,400,40)
  

	bob4=new Bob(480,400,40)
	bob5=new Bob(560,400,40)
	rope1=new Rope(bob1.body,roof.body,-160,0)
	rope2=new Rope(bob2.body,roof.body,-80,0)
	rope3=new Rope(bob3.body,roof.body,0,0)
  rope4=new Rope(bob4.body,roof.body,80,0)
	rope5=new Rope(bob5.body,roof.body,160,0)
	Engine.run(engine);
  
}


function draw(){
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-600,y:-600});
  }
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}