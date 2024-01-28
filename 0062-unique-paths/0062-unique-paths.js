/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(r, c) {
    let dp = Array(r).fill(0).map((_)=>Array().fill(0));
  for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
      if(i == 0 && j == 0){
          dp[i][j] = 1;
        }else if(i== 0 && j != 0) {
          dp[i][j] = dp[i][j-1];
        }else if(i != 0 && j == 0){
          dp[i][j] = dp[i-1][j];
        }else{
          dp[i][j] = dp[i][j-1]+dp[i-1][j] ; 
        }
      
    }
  }
  return dp[r-1][c-1]
};