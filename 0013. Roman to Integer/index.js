/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const values= { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let num = 0
  for(let i = s.length - 1; i >= 0; i--){
      const cur = values[s[i]]
      const prev = values[s[i - 1]]
      if(prev < cur) {
          num -= values[s[--i]]
      }      
      num += cur
  }
  return num
};