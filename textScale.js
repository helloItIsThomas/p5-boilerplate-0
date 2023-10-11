
let textScaleArr = [];
let scaleFloat;

////////////////////////////
// SCALE TYPE              |
// 0 = Minor Second        |
// 1 = Major Second        |
// 2 = Minor Third         |
// 3 = Major Third         |
// 4 = Perfect Fourth      |
// 5 = Augmented Fourth    |
// 6 = Perfect Fifth       |
// 7 = Golden Ratio        |
///////////////////////////

function textScale01(baseSize, scaleLength, scaleType){

  if(scaleType == 0){
    scaleFloat = 1.067;
  } else if (scaleType == 1) {
    scaleFloat = 1.125;
  } else if (scaleType == 2) {
    scaleFloat = 1.200;
  } else if (scaleType == 3) {
    scaleFloat = 1.250;
  } else if (scaleType == 4) {
    scaleFloat = 1.333;
  } else if (scaleType == 5) {
    scaleFloat = 1.414;
  } else if (scaleType == 6) {
    scaleFloat = 1.500;
  } else if (scaleType == 7) {
    scaleFloat = 1.618;
  }

  for(let s=0; s<scaleLength; s++){
    if(s == 0){
      textScaleArr[s] = baseSize;
    } else if(s>0){
      textScaleArr[s] = textScaleArr[s-1]*scaleFloat;
    }
  }
}
