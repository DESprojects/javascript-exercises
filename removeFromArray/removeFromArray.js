var removeFromArray = function(arr, args) {

for(i = 1; i < arguments.length; i++){
    for(e = 0; e < arr.length; e++){
      if(arr[e] == arguments[i]) {
        arr.splice(e,1);
      }
    }
  }
return arr;
}
module.exports = removeFromArray
