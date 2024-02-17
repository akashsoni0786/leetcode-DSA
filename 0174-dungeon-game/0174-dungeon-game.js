/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let n = dungeon.length;
    let m = dungeon[0].length;
    let dp = Array(n).fill().map(()=>Array(m).fill(Infinity));
    for(let i=n-1; i>=0; i--){
        for(let j=m-1; j>=0; j--){
            if(i == n-1 && j == m-1) {
                dp[i][j] = 1-dungeon[i][j]>0?1-dungeon[i][j]:1;
            }else if(i == n-1){
                dp[i][j] = dp[i][j+1]-dungeon[i][j]>0?dp[i][j+1]-dungeon[i][j]:1
            }else if(j == m-1){
                dp[i][j] = dp[i+1][j]-dungeon[i][j]>0?dp[i+1][j]-dungeon[i][j]:1
            }else{
                let k1 = dp[i][j+1]-dungeon[i][j]>0?dp[i][j+1]-dungeon[i][j]:1;
                let k2 = dp[i+1][j]-dungeon[i][j]>0?dp[i+1][j]-dungeon[i][j]:1;
                dp[i][j] = Math.min(k1,k2);
            }
        }
    }
    return dp[0][0]
};