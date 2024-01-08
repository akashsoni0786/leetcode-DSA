/**
 * @param {number[]} arr
 * @return {number[]}
 */

var replaceElements = function(arr) {
    if (arr.length == 1) return [-1];
    let max = -1; // Initialize max to -1, as the last element will be replaced with -1
    let temp;
    for (let i = arr.length - 1; i >= 0; i--) {
      temp = arr[i]; // Store the current element
      arr[i] = max; // Replace the current element with the max found so far
      max = Math.max(max, temp); // Update max if the current element is greater
    }
    return arr;
};