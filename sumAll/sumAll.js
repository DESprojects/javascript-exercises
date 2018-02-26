var sumAll = function(a, b) {
var total = a;
  if (a < 0 || b < 0 || isNaN(a) || isNaN(b) || typeof a === 'string' || typeof b === 'string') {
    return 'ERROR'
  }

  // checks for large number first //
  else if (a > b) {
    total = b;
    for (i = total; i < a; i++) {
      var add = i + 1;
      total += add;
    }
  } else if (a < b) {
    for (i = total; i < b; i++) {
      var add = i + 1;
      total += add;
    }
  }
  return total;
}

module.exports = sumAll
