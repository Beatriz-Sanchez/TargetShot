class Target{
  constructor(x,y){
    var point = {
      restitution: 1,
      isStatic: true,
    }
    this.image = loadImage("Images/Target.png");
    this.r = 40;
    this.body = Bodies.circle(x, y, this.r, point);

    this.visibility = 255;
    World.add(world, this.body);
  }

 display(){
  push();
  var pos = this.body.position;
  tint(255,this.visibility)
  imageMode(CENTER)
  image(this.image, pos.x, pos.y, 120,120);
  pop();
  if(this.visibility<=0){
   World.remove(world, this.body);
  }

 }
}