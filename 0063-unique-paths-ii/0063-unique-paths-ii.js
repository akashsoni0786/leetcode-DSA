/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let n = obstacleGrid.length;
    let m = obstacleGrid[0].length;
    let dp = Array(n).fill().map(()=>Array(m).fill(0));
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(obstacleGrid[i][j] == 0) {
               if(i==0 && j==0){
                  dp[i][j] = 1;
               } else if(i==0 && j!=0){
                  dp[i][j] = dp[i][j-1];
               } else if(i!=0 && j==0){
                  dp[i][j] = dp[i-1][j];
               } else{
                   dp[i][j] = dp[i-1][j] +  dp[i][j-1];
               }
            }else{
                dp[i][j] = 0;
            }
        }
    }
    return dp[n-1][m-1];
};