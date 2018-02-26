var ftoc = function(temp) {
  var answer = (temp -= 32) * .5556;
  return Math.round(10*answer)/10;
}

var ctof = function(temp) {
  var answer = temp * 1.8 + 32;
  return Math.round(10*answer)/10;
}

module.exports = {
  ftoc,
  ctof
}
