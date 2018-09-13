// Code your solution in this file!
function distanceFromHqInBlocks(start){
  let hq = 42;
  if (start > hq) {
    return start-hq;
  } else {
    return hq-start;
  }
}

function distanceFromHqInFeet(start){
  return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264;
  } else {
    return (endBlock - startBlock) * 264;
  }

}

function calculatesFarePrice(start, destination){

  let price;
  let dist = distanceTravelledInFeet(start, destination)

  if (dist < 400) {
    return 0;
  } else (dist > 400 && dist < 200) {
    return (dist-400) * .02;
  }

}
