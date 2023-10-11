class Rectangle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
    }
  }
  
  function drawGrid(countX, countY, gutX, gutY) {
    let grid = [];
  
    const gridSizeW = width - gutX;
    const gridSizeH = height - gutY;
    const shapeSizeW = gridSizeW / countX;
    const shapeSizeH = gridSizeH / countY;
    const newSSW = shapeSizeW - gutX;
    const newSSH = shapeSizeH - gutY;
  
    push();
    noFill();
    strokeWeight(5);
    translate(gutX, gutY);
  
    for (let x = 0; x < countX; x++) {
      let row = [];
      for (let y = 0; y < countY; y++) {
        const rectX = x * shapeSizeW;
        const rectY = y * shapeSizeH;
  
        if (drawGridBool) {
          rect(rectX, rectY, newSSW, newSSH);
        }
  
        const newRect = new Rectangle(rectX, rectY, newSSW, newSSH);
        row.push(newRect);
      }
      grid.push(row);
    }
  
    pop();
  
    return grid;
  }
  