/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let g = -1;
    for(let i=arr.length-1;i>=0;i--) {
        let curr = arr[i];
        arr[i] = g;
        if(g<curr) g = curr;
    }
    return arr
};