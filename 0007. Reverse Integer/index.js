/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {  
  const MAX = Math.pow(2, 31) - 1
  const MIN = Math.pow(-2, 31)
  let remain = x
  let reverse = 0
  while(remain !== 0){
    reverse = reverse * 10 + remain % 10
    remain = parseInt(remain / 10)
  }
  return (reverse < MAX && reverse > MIN)? reverse : 0 
};