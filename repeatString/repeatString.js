var repeatString = function(str, num) {
  var newStr = '';
    if(num < 0) {
      return 'ERROR';
    } else {
    for(i = 1; i <= num; i++){
      newStr += str;
    }
    return newStr;
  }
}

module.exports = repeatString
