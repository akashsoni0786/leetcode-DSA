/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let hmap = new Map();
  for(const element of arr){
    if (hmap.has(element * 2) || hmap.has(element / 2)) return true;
    hmap.set(element, element);
  }
  return false;
};