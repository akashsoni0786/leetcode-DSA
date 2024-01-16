/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
     if (numRows === 0) {
        return [];
    }

    const result = [[1]];

    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        const newRow = [1];

        for (let j = 1; j < prevRow.length; j++) {
            newRow[j] = prevRow[j - 1] + prevRow[j];
        }

        newRow.push(1);
        result.push(newRow);
    }

    return result;
};