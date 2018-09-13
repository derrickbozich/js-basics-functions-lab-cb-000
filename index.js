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
  switch (distanceTravelledInFeet(start, destination)) {
    case < 400:
      price = 0;
      break;
  

  }

}
