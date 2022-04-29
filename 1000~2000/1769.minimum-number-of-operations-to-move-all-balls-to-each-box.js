/**
 * https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 * Medium
 * 
 * Desc:
    You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

    In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

    Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

    Each answer[i] is calculated considering the initial state of the boxes.
 */

/**
 * Example:
    Example 1:
    Input: boxes = "110"
    Output: [1,1,3]
    Explanation: The answer for each box is as follows:
    1) First box: you will have to move one ball from the second box to the first box in one operation.
    2) Second box: you will have to move one ball from the first box to the second box in one operation.
    3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
    
    Example 2:
    Input: boxes = "001011"
    Output: [11,8,5,4,3,4]
 */

/**
 * Constraints:
    n == boxes.length
    1 <= n <= 2000
    boxes[i] is either '0' or '1'.
 */

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations0 = function (boxes) {
  // time complexity: O(n*n), space complexity: O(n)
  let res = [];
  let step = 0;
  for (let i = 0; i < boxes.length; i++) {
    step = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (i === j || boxes[j] === '0') {
        continue;
      }
      step += Math.abs(j - i);
      // console.log(`i:${i}, j:${j}, step: ${step}`);
    }
    res.push(step);
  }
  return res;
};
// not good enough!
var minOperations1 = function (boxes) {
  // time complexity: O(n*n), space complexity: O(n)
  let res = [];
  let step = 0;
  let arr = [];

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] > 0) {
      arr.push(i);
    }
  }
  for (let i = 0; i < boxes.length; i++) {
    step = 0;
    arr.forEach((j) => {
      if (i !== j) {
        step += Math.abs(j - i);
      }
    });
    res.push(step);
  }
  return res;
};

var minOperations = function (boxes) {
  let res = new Array(boxes.length).fill(0);
  let moved = 0;
  let vaild = 0;

  for (let i = 0; i < boxes.length; i++) {
    res[i] += moved;
    if (boxes[i] === '1') ++vaild;
    moved += vaild;
  }

  moved = 0;
  vaild = 0;
  for (let i = boxes.length - 1; i >= 0; i--) {
    res[i] += moved;
    vaild += +boxes[i];
    moved += vaild;
  }

  return res;
};

const boxes = '110'; // Output: [1, 1, 3];
const boxes1 = '001011'; // Output: [11, 8, 5, 4, 3, 4];

console.log('res0: ', minOperations(boxes));
console.log('res1: ', minOperations(boxes1));
