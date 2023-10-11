let backCol;
let maruMini;

let sin1, cos1, tan1;
let mySpeed1;

function preload(){
  maruMini = loadFont("data/maruMini.woff");
}

function setup(){
  mySpeed1 = 0.05;
  textFont(maruMini);
  createCanvas(windowWidth, windowHeight);
  backCol = color('#F3F3F3');
  background(backCol);
  drawGridBool = false;
}

function draw(){
  sin1 = map(sin(frameCount*mySpeed1),-1,1,0,50);
  cos1 = map(cos(frameCount*mySpeed1),-1,1,0,50);
  tan1 = map(tan(frameCount*mySpeed1),-1,1,0,50);
  drawGrid(4,4,4,4);
  textSize(50);

  backCol.setAlpha(50);
  fill(backCol);
  rect(0,0,width,height);
  fill('#000');
  circle(sin1,cos1,200);
  text("hello world", width/2,height/2);
}

function keyPressed(){
  if(key == 'g' || key == 'G'){
    if(drawGridBool == false){
      drawGridBool = true;
    } else if(drawGridBool == true){
      drawGridBool = false;
    }
  }
}
