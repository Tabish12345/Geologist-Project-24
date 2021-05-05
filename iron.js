class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 250, 150, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      fill("grey");
      stroke("black");
      rect(0, 0, 250 , 150);
      pop();
    }
};