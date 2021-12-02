// Namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
// Matrizes
var Flechas = []
var Alvos = []
// Variaveis
var engine, world;
var Arco, Linha, Ancora;
var Pontos = 0
var Contagem = 60
var bgImg; 
var flecha;
var alvo;


function preload(){
 bgImg = loadImage("Images/Wall.jpg")
}

function setup() {
  // Criação da tela e engine 
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  // Criação de objetos de classe
  Arco = new Bow()
  flecha = new Arrow()
  Linha = new String(flecha.body,{x:80, y:215},0.1,0);

 // console.log(flecha)

}


function draw() {
// Adicionar fundo
background(bgImg);  
fill("red");
textSize(20);
text(mouseX+", "+mouseY, 200,40);
// Texto de Pontos
textSize(35);
text("Score : "+Pontos,20,40);
stroke("white");
// Texto do tempo
textSize(35);
text("Tempo : "+Contagem,20,80);
stroke("white");
fill("black");
if(frameCount%70===0){
  Contagem--;
}
// Mostrar os objetos
flecha.display()

Arco.display(); 

Linha.display();

getTarget();

/*for (let i = 0; i < Alvos.length; i++){
 if(Alvos[i]!==null){
  if(Alvos[i].visibility<= 0){
    Alvos[i] = null;
  }
 }

}
*/

//novo
//resolve o bug do mouse
if(mouseIsPressed){
  if(flecha.body.position.x<140){
    Body.setPosition(flecha.body, {x: mouseX, y: mouseY});
  }
}
}


function mouseDragged(){
 // Fazer com que mova a flecha junto com as linhas
  if(mouseY>215){

  }
  //novo
  //faz com que a flecha se incline com o mouse
  Body.setAngle(flecha.body, -(mouseY-20)/32);
  //faz com que a linha siga o mouse
  Linha.posAY = mouseY;
 
}

function mouseReleased(){
  // Soltar a flecha
  Linha.atirar();
}
function getTarget(){
  if(frameCount%250===0){
    Alvos.push(new Target(660,Math.round(random(100,300))))
   
    if(Alvos.length>=2){
      Alvos[Alvos.length-2].visibility -= 105;
      
     } 
    
     if(Alvos.length>=3){
      Alvos[Alvos.length-3].visibility -= 150;
    }  
   
    
   console.log(Alvos[0].body)
   //isTouching(flecha,Alvos[0]);
   
  }

  for (var n = 0; n < Alvos.length; n++) {
    if(Alvos[n]!==null){
      Alvos[n].display();
    }
    
}

}
function keyPressed(){
  if(keyCode === 32){
    Linha.ligar();
  }
}