
////////////////
// template for motion blur and chromatic aberration with alpha blur
var t;                      //init time
const T = 1;                //loop period
const NUM_FRAMES = 100;     //period frame number

// Motion blur and chromatic shift settings - the first three values are adjustable
const NUM_SUBSAMPLES = 10;     // sub-sampled sketches to take between the current and next frame
const SHUTTER_ANGLE = 1;        // 1 will capture all the distance to the next frame
const CHROM_ANGLE = 1;          // 1 will shift the different color channels (rgb)
const CHROM_DT = CHROM_ANGLE*T/NUM_FRAMES/2;
var preview = true;             // default is preview mode / this functionality could be deleted

// define RGB colors for chromatic shift
var colorsCS = ['#1D9E5A', '#217AB8', '#F8C644'];
// var colorsCS = ['#000000', '#000000', '#000000'];
////////////////////////////////////////////////







let backCol;
let maruMini;

let sin1, cos1, tan1;
let mySpeed1;

let myGrid;
let flatGrid;
let gutter = 3;
let melt;


function preload(){
  maruMini = loadFont("data/maruMini.woff");
  melt = loadSound('data/Melt.mp3');
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}

function setup(){
  mySpeed1 = 0.05;
  textFont(maruMini);
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(2);
  backCol = color('#F3F3F3');
  background(backCol);
  drawGridBool = false;
  myGrid = drawGrid(10, 10, gutter, gutter);
  flatGrid = myGrid.flat();
  fft = new p5.FFT();
  melt.amp(0.5);
}

function newDraw() {
  let spectrum = fft.analyze();


  let specDiv = 10;

  for (let i = 0; i< spectrum.length; i+=specDiv){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / (spectrum.length / (specDiv - gutter)), h )
  }
  rect(sin1, cos1, 0.8 * cos1, 200);
}

function draw() {
  var numSubSamples = (preview == false) ? NUM_SUBSAMPLES : 1;
  blendMode(BLEND); //lets the background function to clear the canvas

  if(frameCount == 1){
    if (melt.isPlaying()) {
      melt.pause();
    } else {
      melt.loop();
    }
  }
  textFont(maruMini);
  translate(-width * 0.5, -height * 0.5);
  sin1 = map2(sin(frameCount*mySpeed1),-1,1, width - 250, 50, 6, 2);
  cos1 = map2(cos(frameCount*mySpeed1),-1,1,900,50, 6, 2);
  tan1 = map2(tan(frameCount*mySpeed1),-1,1,200,50, 6, 2);
  drawGrid(4,4,4,4);
  textSize(50);

  backCol.setAlpha(175);
  fill(backCol);
  rect(0,0,width,height);
  stroke('#000');
  noFill();

  
  let waveform = fft.waveform();
  // beginShape();
  // stroke(20);
  // for (let i = 0; i < waveform.length; i++){
    // let x = map(i, 0, waveform.length, 0, width);
    // let y = map( waveform[i], -1, 1, 0, height);
    // vertex(x,y);
  // }
  // endShape();


  flatGrid.forEach(n => {
    // rect(n.x, n.y, n.width, n.height)
  });
  fill('#000');
  text("hello world", width*0.5, height*0.5);

  for (let i=0; i<numSubSamples; i++){
    push();
    t = map(frameCount-1 + i*SHUTTER_ANGLE/numSubSamples, 0, NUM_FRAMES, 0, T)%T; //sub-sampled time
    for (let c=0; c<3; c++){ // for each color RGB
        var tc = t - CHROM_DT*c;  // for chromatic aberration, offset time for each color
        colorc = color(colorsCS[c]);
        // colorc = color(255);
        colorc.setAlpha(255/numSubSamples); // adjust transparency for num of sub-samples
        fill(colorc);
        noStroke();
        // noFill();
        // stroke(colorc);
        // DRAW HERE
        push();
        newDraw();
        pop();
    }
    pop();
}
}

function keyPressed(){
  if(key == 'g' || key == 'G'){
    if(drawGridBool == false){
      drawGridBool = true;
    } else if(drawGridBool == true){
      drawGridBool = false;
    }
  } else if(key == 'p' || key == 'P'){
    if (melt.isPlaying()) {
      melt.pause();
    } else {
      melt.loop();
    }
  } else if(key == 'r' || key == 'R'){
      melt.jump();
  }
}
