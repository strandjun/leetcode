/**
 * https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
 * Medium
 * 
 * Desc:
    Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

    If there are no nodes with an even-valued grandparent, return 0.
 */

/**
 * Example:
    Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
    Output: 18
    Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
 */

/**
 * Constraints:
    The number of nodes in the tree is between 1 and 10^4.
    The value of nodes is between 1 and 100.
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
var sumEvenGrandparent = function(root) {
    let res = 0
    function getSum (root, p, gp) {
        if (gp && gp.val % 2 === 0) {
            res += root.val
        }
        root.left && getSum(root.left, root, p)
        root.right && getSum(root.right, root, p)
    }
    getSum(root, p = null, gp = null)
    return res
};

const root = [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5];
// Output: 18

console.log('res0: ', sumEvenGrandparent(root))
