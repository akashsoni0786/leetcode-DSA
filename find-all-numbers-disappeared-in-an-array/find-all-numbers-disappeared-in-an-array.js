/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let hm = new Map();
  let ans = [];
  for (let i of nums) {
    hm.set(i, i);
  }
  for (let i = 1; i < n + 1; i++) {
    if (!hm.has(i)) ans.push(i);
  }
  return ans;
};