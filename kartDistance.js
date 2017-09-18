function calcDistance(x1, y1, x2, y2){
  /*
  calculates Distance between two Points in a cartesian coordinate system
  */
  var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}


function calcPoint(x1, y1, x2, y2, distanceToPoint1){
  /*
  finds coordinates on a line in a cartesian coordinate system
  */
  var totalDistance = calcDistance(x1, y1, x2, y2);
  var x_new = (1 - (distance / totalDistance)) * x1 + ((distance / totalDistance) * x2);
  var y_new = (1 - (distance / totalDistance)) * y1 + ((distance / totalDistance) * y2);
  /*
  Exception if distance == 0
  */
  if (velocity === 0){
  	x_new = x1;
  	y_new = y1;
  }
  return [x_new, y_new]
}
