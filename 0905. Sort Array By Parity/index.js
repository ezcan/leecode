/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  return A.sort((a,b)=> a % 2 - b % 2)
};