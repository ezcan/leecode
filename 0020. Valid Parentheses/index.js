/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  const brackets = '()[]{}'
  let charCodes = []
  for (let i = 0; i < s.length; i++) {
    let idx = brackets.indexOf(s.charAt(i))
    if (idx % 2 === 0) {
      charCodes.push(idx)
    } else {
      let lastIdx = charCodes.pop()
      lastIdx === idx - 1 ? null : charCodes.push(lastIdx)
    }
  }
  return charCodes.length === 0
};