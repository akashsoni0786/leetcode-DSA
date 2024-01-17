/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let min = +Infinity;
    let result = [];
    for(let i=1;i<arr.length;i++){
        let tempmin = Math.abs(arr[i] - arr[i - 1]);
        if(min > tempmin){
            min = Math.abs(arr[i] - arr[i - 1]);
            result = []
            result.push([arr[i-1],arr[i]])
        }else if(min == tempmin){
            result.push([arr[i-1],arr[i]])
        }
    }
    return result
};