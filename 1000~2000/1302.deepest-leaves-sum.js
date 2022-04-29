/**
 * https://leetcode.com/problems/deepest-leaves-sum/
 * Medium
 * 
 * Desc:
    Given the root of a binary tree, return the sum of values of its deepest leaves.
 */

/**
 * Example:
    Example 1:
    Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
    Output: 15

    Example 2:
    Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
    Output: 19
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let sum = 0;
  let maxLevel = 0;

  const traverse = (root, currLevel = 0) => {
    if (!root) return null;

    if (!root.left && !root.right) {
      if (currLevel === maxLevel) {
        sum += root.val;
      } else if (currLevel > maxLevel) {
        sum = root.val;
        maxLevel = currLevel;
      }
    }

    root.left && traverse(root.left, currLevel + 1);
    root.right && traverse(root.right, currLevel + 1);
  };

  traverse(root);
  return sum;
};

const root = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]; // Output: 15
const root1 = [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]; // Output: 19

console.log('res0: ', deepestLeavesSum(root));
console.log('res1: ', deepestLeavesSum(root1));
