class String{
 // Constructor e propriedades
  constructor(bodyA,pointB){
  var options = {
    bodyA: bodyA,
    pointB: pointB,
    length: 1,
    stiffness: 0.10,
    
  };
 // Criação da linha
this.string = Constraint.create(options);
 World.add(world,this.string);
 this.bodyA = bodyA;
 this.pointB = pointB;
  
 }
// Função para o sketch.js
 atirar(){
  this.string.bodyA = null;
 }


display(){
// variáveis de posição  
  var Ap = this.bodyA.position;
  var Bp = this.pointB;
// Criação do efeito de esticar e as linhas  
  if(this.string.bodyA){
    push();
  if(Ap.x>40 || Ap.x>100 ){
    strokeWeight(2)
  } else{
    strokeWeight(3);
  }
  stroke(0,0,0)
  line(Ap.x-50, Ap.y, Bp.x-3, Bp.y-75);
  line(Ap.x-50, Ap.y, Bp.x-3, Bp.y+75);
  
  pop();
   

  }
  if(!this.string.bodyA){
    push()
  stroke(0,0,0)
  strokeWeight(2)
  line(76, 215, Bp.x-3, Bp.y-75);
  line(76, 215, Bp.x-3, Bp.y+75);
  
    pop();
  }
 }


}