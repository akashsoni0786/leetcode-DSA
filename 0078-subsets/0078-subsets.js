/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ans = [];
  const handler = (index, curr) => {
    if (index == nums.length) {
      ans.push(curr.slice());
      return ans;
    }
    curr.push(nums[index]);
    handler(index + 1, curr);
    curr.pop();
    handler(index + 1, curr);
  };
  handler(0, []);
  return ans;
};