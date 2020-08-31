const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var engine, balls, world, bruce;
var img, raindrops, drops,drp,drp2,drp3,drp4,drp5,drp6,drp7,drp8,drp9,drp10;

function preload(){
    //img = loadImage("YoungBruce.png");
}

function setup(){
  var CANVAS =  createCanvas(400,720);
   engine = Engine.create();
   world = engine.world;
 
  bruce = new Umbrella();
  //raindrops = new Rain();
 drp = new Rain(random(0,400),random(0,400))
 drp2 = new Rain(random(0,400),random(0,400))
 drp3 = new Rain(random(0,400),random(0,400))
 drp4 = new Rain(random(0,400),random(0,400))
 drp5 = new Rain(random(0,400),random(0,400))
 drp6 = new Rain(random(0,400),random(0,400))
 drp7 = new Rain(random(0,400),random(0,400))
 drp8 = new Rain(random(0,400),random(0,400))
 drp9 = new Rain(random(0,400),random(0,400))
 drp10 = new Rain(random(0,400),random(0,400))
 drp11 = new Rain(random(0,400),random(0,400))




//**** DOUBT HERE: Why is drop not an object of rain class even though I have declared it to be? ****
  drops = []
  
       for(var i=0; i < maxDrops; i++){
            drops.push(new Rain(random(0,400),random(0,400)));
        }
       // drops.update();
       //bruce = loadImage(img);
       //World.add(world,bruce);
      
}

function draw(){
  background(0,10,107)
    Engine.update(engine);
   bruce.display();
  
  
  // ****  When I say drops.display(), it says it is not a function  ****
  // drops.display();


   drp.display()
   drp2.display()
   drp3.display()
   drp4.display()
   drp5.display()
   drp6.display()
   drp7.display()
   drp8.display()
   drp9.display()
   drp10.display()

   
   

    drawSprites();
}   

