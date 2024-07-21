/**
 * @param {number[]} heights
 * @return {number}
 */
var maximumSumOfHeights = function(maxHeights) {
    var max= Math.max(...maxHeights);
    var i,j,count=[];
    var search=function(idx){
        var heights=[];
        for(j=0;j<maxHeights.length;j++){
            heights[j]=maxHeights[j];
        }
        for(j=idx-1;j>=0;j--){
            if(heights[j]>heights[j+1]){
                heights[j]=heights[j+1];
            }
        }
        for(j=idx+1;j<maxHeights.length;j++){
            if(heights[j+1]>heights[j]){
                heights[j+1]=heights[j];
            }
        }
        var sum=0;
        for(j=0;j<heights.length;j++){
            sum+=heights[j];
        }
        count.push(sum);
        return;
    }
    
    for(i=0;i<maxHeights.length;i++){
        search(i);
    }
    return Math.max(...count);
};