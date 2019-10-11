/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length)
  let prefix = strs[0] || ''
  for (let i = prefix.length; i >= 0; i--) {
    prefix = prefix.substr(0, i)
    if (strs.every(str => str.startsWith(prefix))) {
      return prefix
    }
  }
};