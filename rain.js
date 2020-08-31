class Rain {
    constructor(x,y){
      var options={
          friction:0.1,
          density:10,
          isStatic: false
    }
    this.body = Bodies.circle(x,y,10,options);
    this.radius = 20;
    World.add(world, this.body);

    if (this.body.position.y>400){
        Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
    }
 }
    display(){
        fill("blue")
        ellipse(this.body.position.x, this.body.position.y,10);
         }
}
