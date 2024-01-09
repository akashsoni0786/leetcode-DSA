/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if(arr.length < 3) return false;
  let flag = false;
  let i = 1;
  while(i<arr.length){
    if ((arr[i] > arr[i - 1] && !flag) || (arr[i] < arr[i - 1] && flag)) {
      i++;
      if(arr[i] < arr[i - 1]) flag = true

    } else {
      return false;
    }
  }
  return flag;
};