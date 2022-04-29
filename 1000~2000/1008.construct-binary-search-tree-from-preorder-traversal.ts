/**
 * https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 * Medium    
 */

// Definition for a binary tree node.
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

function bstFromPreorder(preorder: number[]): TreeNode | null {

    const root = new TreeNode(preorder[0])
    
    const bst = (val: number) => {
        const node = new TreeNode()
        node.val = val
        let cur: TreeNode = root

        while (cur) {
            if (val < cur.val) {
                if (!cur.left) {
                    cur.left = node
                    break
                }
                cur = cur.left
            } else {
                if (!cur.right) {
                    cur.right = node
                    break
                }
                cur = cur.right
            }
        }
    }


    for (let i = 1; i < preorder.length; i++) {
        bst(preorder[i])
    }

    return root
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

// const preorder = [8, 5, 1, 7, 10, 12]
const preorder = [8, 12, 5, 7, 1, 10]
const output = [8, 5, 10, 1, 7, null, 12]

Deno.test("assertEquals1 Test", () => {
    assertEquals(bstFromPreorder(preorder), output);
});
