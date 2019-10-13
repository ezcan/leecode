/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let set = {}
  for(let key of A){
      if(set[key]) return key
      set[key] = 1
  }
};