/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    helper(result, n * 2, 0, '');
    return result;
};

function helper(result, remainingCount, openCount, str) {   
    if (openCount > remainingCount || openCount < 0) return;
    
    if (remainingCount === 0) {
        result.push(str);
        return;
    }
    
    --remainingCount;
    helper(result, remainingCount, openCount + 1, str + '(');
    helper(result, remainingCount, openCount - 1, str + ')');
}