/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function (arr1, arr2) {
  const calcWeight = n => {
    return arr2.includes(n) ? arr2.indexOf(n) : n * 1000
  }
  return arr1.sort((a, b) => calcWeight(a) - calcWeight(b))
}