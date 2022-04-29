/**
 * https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
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

function maxAncestorDiff1(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const recursion = (node: TreeNode | null, max: number, min: number, diff: number): number => {
        if (!node) {
            return diff
        }
        const maxDiff = Math.max(Math.abs(max - node.val), Math.abs(min - node.val), diff)
        const maxVal = Math.max(max, node.val)
        const minVal = Math.min(min, node.val)

        const left = recursion(node.left, maxVal, minVal, maxDiff)
        const right = recursion(node.right, maxVal, minVal, maxDiff)

        return Math.max(left, right, maxDiff)
    }

    return recursion(root, root.val, root.val, 0)
}


function maxAncestorDiff(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const recursion = (node: TreeNode | null, max: number, min: number): number => {
        if (node === null) {
            return max - min
        }
        max = Math.max(max, node.val)
        min = Math.min(min, node.val)

        return Math.max(recursion(node.left, max, min), recursion(node.right, max, min))
    }

    return recursion(root, root.val, root.val)
}
