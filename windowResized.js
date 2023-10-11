
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  gridSizeW = width - (gridGX);
  gridSizeH = height - (gridGY);
  shapeSizeW = gridSizeW / gridCountX;
  shapeSizeH = gridSizeH / gridCountY;
  newSSW = shapeSizeW-(gridGX);
  newSSH = shapeSizeH-(gridGY);
}
