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
  for(i = 0; i < xx1.length; i++){
    distance += Math.pow(xx2[i] - xx1[i], 2);
  }
  return parseFloat(Math.sqrt(distance));
}


function calcPoint2D(xy1, xy2, distanceTo_xy1){
  /*
  finds coordinates of a point on a line in a 2D cartesian coordinate system
  return Point as array [x, y]
  */
  var totalDistance = calcDistance(xy1, xy2);
  var x_new = (1 - (distanceTo_xy1 / totalDistance)) * xy1[0] + ((distanceTo_xy1 / totalDistance) * xy2[0]);
  var y_new = (1 - (distanceTo_xy1 / totalDistance)) * xy1[1] + ((distanceTo_xy1 / totalDistance) * xy2[1]);
  /*
  Exception if totalDistance === 0
  */
  if (totalDistance === 0){
  	x_new = xy1[0];
  	y_new = xy1[1];
  }
  return [x_new, y_new];
}

console.log(calcPoint2D([1,1], [1,5], 2));

