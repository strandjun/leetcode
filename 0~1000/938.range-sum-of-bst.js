/**
 * https://leetcode.com/problems/range-sum-of-bst/
 * easy
 * 
 * Desc:
    Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
 */

/**
 * Example:
    Example 1:
    Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
    Output: 32

    Example 2:
    Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
    Output: 23
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    // let res = 0
    // if (root === null) {
    //     return res
    // }
    // if (root.val > low) {
    //     res += rangeSumBST(root.left, low, high)
    // }
    // if (root.val < high) {
    //     res += rangeSumBST(root.right, low, high)
    // }
    // if (root.val <= high && root.val >= low) {
    //     res += root.val
    // }
    // return res 

    let sum = 0;
    const traverse = (root) => {
        if (root.val >= low && root.val <= high) sum += root.val;
        if (root.left !== null && root.val > low) traverse(root.left);
        if (root.right !== null && root.val < high) traverse(root.right);
    };
    traverse(root);
    return sum;
};

const root = [10, 5, 15, 3, 7, null, 18], low = 7, high = 15; // Output: 32
const root1 = [10, 5, 15, 3, 7, 13, 18, 1, null, 6], low1 = 6, high1 = 10; // Output: 23

console.log("res0: ", rangeSumBST(root, low, high));
console.log("res1: ", rangeSumBST(root1, low1, high1));
