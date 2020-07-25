const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = [];
var divisions = [];
var balls = [];
var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,790,width,20);

  for (var d=0; d<=width; d = d+80){
    divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
  }
  for (var p = 10; p<=width; p = p+50){
    for(var q = 75; q<=450; q = q+100){
      plinkos.push(new Plinko(p,q));
  }
}
  for (var p = 30; p<=width-20; p = p+50){
    for(var q = 125; q<=450; q = q+100){
      plinkos.push(new Plinko(p,q));
  }
}
//balls.push(new Ball(random(30,450),0,10));
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();


  for(var d = 0; d < divisions.length; d++){
    divisions[d].display();
  }
  for(var p = 0; p < plinkos.length; p++){
    plinkos[p].display();
  }
  for(var b = 0; b < balls.length; b++){
    balls[b].display();
  }

  if(frameCount %90 === 0){
    balls.push(new Ball(random(30,450),0));
  }
}