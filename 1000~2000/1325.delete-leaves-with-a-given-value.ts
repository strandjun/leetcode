/**
 * https://leetcode.com/problems/delete-leaves-with-a-given-value/
 * Medium    
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

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {

    const isTarget = (node: TreeNode | null) => {
        if (node === null) {
            return false
        }
        if (node.left == null && node.right == null && node.val === target) {
            // if leaf with target
            return true
        }
        return false
    }

    const dfs = (root: TreeNode | null, newNode: TreeNode) => {
        if (isTarget(root)) {
            return null
        }

        newNode.val = root.val
        if (root.left !== null) {
            const ln = dfs(root.left, new TreeNode())
            newNode.left = isTarget(ln) ? null : ln
        }
        if (root.right !== null) {
            const rn = dfs(root.right, new TreeNode())
            newNode.right = isTarget(rn) ? null : rn
        }

        if (isTarget(newNode)) {
            return null
        }

        return newNode
    }


    return dfs(root, new TreeNode())
};