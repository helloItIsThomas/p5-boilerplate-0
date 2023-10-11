let backCol;
let maruMini;

let sin1, cos1, tan1;
let mySpeed1;

let myGrid;
let flatGrid;

function preload(){
  maruMini = loadFont("data/maruMini.woff");
}

function setup(){
  mySpeed1 = 0.05;
  textFont(maruMini);
  createCanvas(windowWidth, windowHeight, WEBGL);
  backCol = color('#F3F3F3');
  background(backCol);
  drawGridBool = false;
  myGrid = drawGrid(10, 10, 3, 3);
  flatGrid = myGrid.flat();
  pixelDensity(2);
}

function draw(){
  textFont(maruMini);
  translate(-width * 0.5, -height * 0.5);
  sin1 = map(sin(frameCount*mySpeed1),-1,1,0,50);
  cos1 = map(cos(frameCount*mySpeed1),-1,1,0,50);
  tan1 = map(tan(frameCount*mySpeed1),-1,1,0,50);
  drawGrid(4,4,4,4);
  textSize(50);

  backCol.setAlpha(50);
  fill(backCol);
  rect(0,0,width,height);
  stroke('#000');
  noFill();
  rect(sin1, cos1, 200, 200);

  flatGrid.forEach(n => {
    // rect(n.x, n.y, n.width, n.height)
  });
  fill('#000');
  text("hello world", width*0.5, height*0.5);
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
