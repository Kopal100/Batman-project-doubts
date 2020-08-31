class Umbrella {
    constructor(){
      var options={
         isStatic: true,
    }

    //this.image = loadImage("YoungBruce");
    this.body = Bodies.circle(200,450,70,options);
    this.radius = 100;
    World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);
      // image(this.body,200,450);
        ellipse(this.body.position.x, this.body.position.y,100);
    }
  
}
