/**
 * https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
 * Medium
 * 
 * Desc:
    
 */

/**
 * Example:
    Example 1:
    Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
    Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
    
    Example 2:
    Input: root = [0,null,1]
    Output: [1,null,1]
    
    Example 3:
    Input: root = [1,0,2]
    Output: [3,3,2]

    Example 4:
    Input: root = [3,2,4,1]
    Output: [7,9,4,10]
 */

/**
 * Constraints:
    The number of nodes in the tree is in the range [1, 100].
    0 <= Node.val <= 100
    All the values in the tree are unique.
    root is guaranteed to be a valid binary search tree.
 */

/**
 * Definition for a binary tree node. 
 */
class TreeNode {
   val: number
   left: TreeNode | null
   right: TreeNode | null
   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
   }
}


// DFS
function bstToGst(root: TreeNode | null): TreeNode | null {

   const recursion = (node: TreeNode | null, accumulate: number): number => {
      if (node === null) {
         return accumulate
      }

      accumulate = recursion(node.right, accumulate)
      node.val += accumulate

      return recursion(node.left, node.val)
   }
   recursion(root, 0)

   return root
};

console.log('res0: ',)
console.log('res1: ',)
console.log('res2: ',)
