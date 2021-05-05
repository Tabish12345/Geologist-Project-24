const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubbber1 = new Rubber (350,500,5)
    rubbber2 = new Rubber (353,500,5)
    rubbber3 = new Rubber (357,500,5)
    rubbber4 = new Rubber (359,500,5)
    rubbber5 = new Rubber (361,500,5)
    rubbber6 = new Rubber (363,500,5)
    stone1 = new Stone (500,500)
    iron1 = new Iron (900,500)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubbber1.display();
    rubbber2.display();
    rubbber3.display();
    rubbber4.display();
    rubbber5.display();
    rubbber6.display();
    stone1.display();
    iron1.display();


    
 
}