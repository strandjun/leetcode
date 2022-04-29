/**
 * https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/
 * Medium
 */

// for (let i = 0; i < arr.length; i++) {}
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const res = new Array(rowSum.length);
  for (let i = 0; i < rowSum.length; i++) {
    res[i] = new Array(colSum.length);
  }

  for (let i = 0; i < rowSum.length; i++) {
    for (let j = 0; j < colSum.length; j++) {
      res[i][j] = Math.min(rowSum[i], colSum[j]);
      rowSum[i] -= res[i][j];
      colSum[j] -= res[i][j];
    }
  }

  return res;
};

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

const rowSum = [3, 8],
  colSum = [4, 7];
const output = [
  [3, 0],
  [1, 7],
];
Deno.test('assertEquals Test0', () => {
  assertEquals(restoreMatrix(rowSum, colSum), output);
});

const rowSum1 = [5, 7, 10],
  colSum1 = [8, 6, 8];
Deno.test('assertEquals Test1', () => {
  assertEquals(restoreMatrix(rowSum1, colSum1), [
    [0, 5, 0],
    [6, 1, 0],
    [2, 0, 8],
  ]);
});

const rowSum2 = [14, 9],
  colSum2 = [6, 9, 8];
Deno.test('assertEquals Test2', () => {
  assertEquals(restoreMatrix(rowSum2, colSum2), [
    [0, 9, 5],
    [6, 0, 3],
  ]);
});

const rowSum3 = [1, 0],
  colSum3 = [1];
Deno.test('assertEquals Test3', () => {
  assertEquals(restoreMatrix(rowSum3, colSum3), [[1], [0]]);
});

const rowSum4 = [0],
  colSum4 = [0];
Deno.test('assertEquals Test4', () => {
  assertEquals(restoreMatrix(rowSum4, colSum4), [[0]]);
});

Deno.test('assertEquals Test5', () => {
  assertEquals(restoreMatrix([4, 12, 10, 1, 0], [1, 0, 3, 16, 7]), [
    [0, 0, 3, 0, 1],
    [0, 0, 0, 12, 0],
    [0, 0, 0, 4, 6],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
});
