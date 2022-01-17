var retmovel
var retparado

function setup() {
  createCanvas(800,400);
  retmovel = createSprite(100, 100, 50, 50);
  retparado = createSprite(400, 200, 50, 50);
  retmovel.debug = true;
  retparado.debug = true;
  retmovel.shapeColor = "green";
  retparado.shapeColor = "green";
}

function draw() {
  background(79,79,79);  
  retmovel.x = World.mouseX;
  retmovel.y = World.mouseY;
  console.log(retmovel.x-retparado.x);

  touching();

  drawSprites();
}
function touching(){
  
  if(retmovel.x-retparado.x<retmovel.width/2+retparado.width/2 && 
    retparado.x-retmovel.x<retmovel.width/2+retparado.width/2 && 
    retmovel.y-retparado.y<retmovel.height/2+retparado.height/2 &&
    retparado.y-retmovel.y<retmovel.height/2+retparado.height/2){

  retmovel.shapeColor="blue";
  retparado.shapeColor="blue";
  }
  else {

  retmovel.shapeColor = "green";
  retparado.shapeColor = "green";
  }
}