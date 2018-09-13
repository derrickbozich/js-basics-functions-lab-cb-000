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
