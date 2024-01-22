/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let obj1 = {};
  let obj2 = {};
  let ans = 0;
  let acc = false;
  for (const element of words) {
    obj1[element] = (obj1[element] ?? 0) + 1;
  }
  Object.keys(obj1).forEach((element, i) => {
    let check = element[0] == element[1];
    if (check) {
      if (!acc) {
        if (obj1[element] > 0) {
          if (obj1[element] % 2 !== 0) {
            obj2[element] = obj1[element];
            acc = true;
          } else {
            obj2[element] = obj1[element];
          }
        }
      } else if (obj1[element] % 2 == 0) {
        obj2[element] = obj1[element];
      } else if (obj1[element]>=3) {
        obj2[element] = obj1[element] - 1;
      }
    } else {
      obj2[element] = Math.min(obj1[element],(obj1[element.split('').reverse().join("")] ?? 0));
    }
  });
  Object.keys(obj2).forEach((data, i) => {
    ans = ans + obj2[data];
  });
  return ans * 2;
};