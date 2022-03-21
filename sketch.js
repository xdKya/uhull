const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var engine;
var world;
var ball;
var ground;




function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  //opcoes do chao
  var ground_options = {
    isStatic: true
  }

  //cria um corpo fisico do chão
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  //adiciona o corpo fisico ao mundo
  World.add(world,ground);

  console.log(ground)
   

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
   background(189,85,43);
   Engine.update(engine);


   //como o chao aparece na tela
   fill(290,85,50);
   rect(ground.position.x,ground.position.y,400,20);
   
  
}

