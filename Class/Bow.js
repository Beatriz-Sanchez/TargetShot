class Bow{
  constructor(){
    var adjetives = {
      restitution: 1,
      friction: 0,
      isStatic: true
  }
  this.image = loadImage("Images/Bow.png")
  this.width = 50;
  this.height = 50;
  
  this.body = Bodies.rectangle(5, 125, this.width, this.height,adjetives)
  World.add(world, this.body);
}

display(){
  push()
  image(this.image, this.body.position.x, this.body.position.y, 175,175);
  imageMode(CENTER);
  pop();
}



}
