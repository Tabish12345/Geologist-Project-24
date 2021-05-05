class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 150, 100, options);
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
      fill("yellow");
      stroke("grey");
      rect(0 , 0 , 150 , 100);
      pop();
    }
};