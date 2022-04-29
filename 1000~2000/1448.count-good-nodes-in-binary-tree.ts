/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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

function goodNodes1(root: TreeNode | null): number {
    if (!root) {
        return 0
    }
    let count = 0

    const countGoodNodes = (max: number, node: TreeNode) => {
        if (node.val >= max) {
            count++
        }
        if (node.left) {
            countGoodNodes(Math.max(node.val, max), node.left)
        }
        if (node.right) {
            countGoodNodes(Math.max(node.val, max), node.right)
        }
    }
    countGoodNodes(root.val, root)

    return count
}

function goodNodes(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const countGoodNodes = (max: number, node: TreeNode) => {
        let count = node.val >= max ? 1 : 0
        if (node.left) {
            count += countGoodNodes(Math.max(node.val, max), node.left)
        }
        if (node.right) {
            count += countGoodNodes(Math.max(node.val, max), node.right)
        }
        return count
    }
    return countGoodNodes(root.val, root)
}
