
exports.min = function min (array) {
  return arguments.length !== 0 && array.length !== 0  ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return arguments.length !== 0 && array.length !== 0 ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
  return arguments.length !== 0 && array.length !== 0? array.reduce((prev, cur) => prev + cur, 0) / array.length : 0;
}
