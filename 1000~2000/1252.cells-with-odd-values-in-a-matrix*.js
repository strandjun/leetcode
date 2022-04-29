/**
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 * Easy
 * 
 * Desc:
    There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

    For each location indices[i], do both of the following:

    Increment all the cells on row ri.
    Increment all the cells on column ci.
    Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.
 */

/**
 * Example:
    Example 1:
    Input: m = 2, n = 3, indices = [[0,1],[1,1]]
    Output: 6
    Explanation: Initial matrix = [[0,0,0],[0,0,0]].
    After applying first increment it becomes [[1,2,1],[0,1,0]].
    The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
    
    Example 2:
    Input: m = 2, n = 2, indices = [[1,1],[0,0]]
    Output: 0
    Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */

// Time complexity: O(m + indices.length * (m + n) + m * n)
// Space complexity: O(m * n)
var oddCells = function(m, n, indices) {
    let count = 0
    let arr = []

    // It didn't work: arr = new Array(m).fill(new Array(n).fill(0))
    for (let k = 0; k < m; k++) {
        arr.push(new Array(n).fill(0))
    }
    for (let i = 0; i < indices.length; i++) {
        const [ri, ci] = indices[i]

        for (let c = 0; c < n; c++) {
            arr[ri][c] += 1
        }        
        for (let r = 0; r < m; r++) {
            arr[r][ci]++
        }
    }
    // console.log('arr: ', arr)
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (arr[r][c] % 2 > 0) {
                count++
            }
        }
    }
    return count
};

// Time complexity: O(indices.length + row * column)
// Space complexity: O(row + column)
const oddCells = (row, column, indices) => {
    const rowCount = new Uint8Array(row);
    const columnCount = new Uint8Array(column);
    let ret = 0;
  
    for (let i = 0; i < indices.length; ++i) {
      ++rowCount[indices[i][0]];
      ++columnCount[indices[i][1]];
    }
  
    for (let i = 0; i < row; ++i) {
      for (let j = 0; j < column; ++j) {
        ((rowCount[i] + columnCount[j]) & 1) === 1 && ++ret;
      }
    }
  
    return ret;
};

const m = 2, n = 3, indices = [[0,1],[1,1]]    // Output: 6
const m1 = 2, n1 = 2, indices1 = [[1,1],[0,0]] // Output: 0

console.log('res0: ', oddCells(m, n, indices))
console.log('res1: ', oddCells(m1, n1, indices1))
