/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false
  let remain = x
  let reverse = 0
  while(remain !== 0){
    reverse = reverse * 10 + remain % 10
    remain = parseInt(remain / 10)
  }
  return reverse === x
}