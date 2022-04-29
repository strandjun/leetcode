/**
 * https://leetcode.com/problems/sort-the-matrix-diagonally
 * Medium
 * 
 * Desc:
    A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

    Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.
 */

/**
 * Example:
    Example 1:
    Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
    Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

    Example 2:
    Input: mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
    Output: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]
 */

/**
 * Constraints:
    m == mat.length
    n == mat[i].length
    1 <= m, n <= 100
    1 <= mat[i][j] <= 100
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort0 = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  for (let column = 0; column < n; column++) {
    let i = 0;
    let j = column;
    const tmp = [];
    while (i < m && j < n) {
      tmp.push(mat[i][j]);
      j++;
      i++;
    }
    tmp.sort((a, b) => a - b);

    i = 0;
    j = column;
    let k = 0;
    while (i < m && j < n) {
      mat[i][j] = tmp[k];
      k++;
      j++;
      i++;
    }
  }

  for (let row = 1; row < m; row++) {
    let i = row;
    let j = 0;
    const tmp = [];
    while (i < m && j < n) {
      tmp.push(mat[i][j]);
      j++;
      i++;
    }
    tmp.sort((a, b) => a - b);

    i = row;
    j = 0;
    let k = 0;
    while (i < m && j < n) {
      mat[i][j] = tmp[k];
      k++;
      j++;
      i++;
    }
  }

  return mat;
};

var diagonalSort = function (mat) {
  let tmp = {};

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      const d = i - j;
      if (!tmp[d]) {
        tmp[d] = [];
      }
      tmp[d].push(mat[i][j]);
    }
  }

  for (let d in tmp) {
    tmp[d].sort((a, b) => b - a);
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      const d = i - j;
      mat[i][j] = tmp[d].pop()
    }
  }

  return mat;
};

const mat = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
]; // Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
const mat1 = [
  [11, 25, 66, 1, 69, 7],
  [23, 55, 17, 45, 15, 52],
  [75, 31, 36, 44, 58, 8],
  [22, 27, 33, 25, 68, 4],
  [84, 28, 14, 11, 5, 50],
]; // Output: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]

console.log('res0: ', diagonalSort(mat));
console.log('res1: ', diagonalSort(mat1));
