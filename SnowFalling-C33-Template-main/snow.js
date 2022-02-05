class Snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,100,100,options);
        
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
      }
      display(){
       
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, 0,100,100);
       
      }
}
