function calcDistance(xx1, xx2){
  /*
  - calculates Distance between two Points in a cartesian coordinate system
  - expects two arrays of the same length [x, y, z, k, ...], [x, y, z, k, ...]
  - returns distance as float
  */
  if (xx1.length !== xx2.length){
    throw "Invalid Arguments";
    return;
  }
  var distance = 0;
  for(let i = 0; i < xx1.length; i++){
    distance += Math.pow(xx2[i] - xx1[i], 2);
  }
  return parseFloat(Math.sqrt(distance));
}


function calcPoint(xx1, xx2, distanceTo_xx1){
  /*
  finds coordinates of a point on a line in a cartesian coordinate system
  return Point as array [x, y, z ...]
  */
  var totalDistance = calcDistance(xx1, xx2);
  var returnPoint = []; 
  for(let i = 0; i < xx1.length; i++){
    xxx = (1 - (distanceTo_xx1 / totalDistance)) * xx1[i] + ((distanceTo_xx1 / totalDistance) * xx2[i]);
    returnPoint.push(xxx);
  }
  
  if (totalDistance === 0){
  	returnPoint = xx1;
  }
  return returnPoint;
}



function calcLineDistance(PointArray){
  /*
  Expects Array with Points, that have the same number of coordinates
  [[x, y, z, k ...], [x, y, z, k ...], [x, y, z, k ...], ...]
  returns the length bewteen the points as float
  */
  totalLength = 0;
  for(let i = 0; i < PointArray.length - 1; i++){
    console.log("Laenge: " + PointArray.length + " i: " + i);
    console.log("Wert: " + totalLength);
    totalLength += calcDistance(PointArray[i], PointArray[i+1]);
    console.log("x: " + i);
  }
  return parseFloat(totalLength);
}


function calcDistanceWGS84(xx1, xx2){
  /*
  calculates Distance between two Points in the Wgs84 coodrinate System
  returns distance in meters as float
  */
  clon = radians(parseFloat(xx1[0]));
  clat = radians(parseFloat(xx1[1]));
  flon = radians(parseFloat(xx2[0]));
  flat = radians(parseFloat(xx2[1]));
  var x = Math.sin(clat) * Math.sin(flat) + Math.cos(clat) * Math.cos(flat) * Math.cos(flon - clon);
  var distance = 6378.388 * Math.acos(x);
  distance = distance * 1000;
    /*
  Exception for float-multiplication problem, 
  - arcos(1.000000002) == nan
  - arcos(1) == 0
  */
  if (isNaN(velocity)){
    velocity = 0.0;
  }
  return parseFloat(distance);
}