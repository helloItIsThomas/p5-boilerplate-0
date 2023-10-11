let gridSizeW, gridSizeH;
let shapeSizeW, shapeSizeH;
let newSSW, newSSH;
let gridCountX, gridCountY;
let gridGX, gridGY;
let drawGridBool;

function drawGrid(countX, countY, gutX, gutY){
  gridCountX = countX;
  gridCountY = countY;
  gridGX = gutX;
  gridGY = gutY;

  gridSizeW = width - (gridGX);
  gridSizeH = height - (gridGY);
  shapeSizeW = gridSizeW / gridCountX;
  shapeSizeH = gridSizeH / gridCountY;
  newSSW = shapeSizeW-(gridGX);
  newSSH = shapeSizeH-(gridGY);

  push();
  noFill();
  strokeWeight(5);
  translate(gridGX, gridGY);
  for(let x=0; x<gridCountX; x++){
    for(let y=0; y<gridCountY; y++){
      if(drawGridBool == true){
        rect(x*(shapeSizeW), y*(shapeSizeH), newSSW, newSSH);
      }
    }
  }
  pop();
}


