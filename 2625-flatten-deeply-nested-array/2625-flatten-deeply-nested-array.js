/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n == 0) {
    return arr;
  }
  let newArr = [];
  for (const element of arr) {
    if (Array.isArray(element) && n > 0) {
      let subArr = flat(element, n - 1);
      newArr.push(...subArr);
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};