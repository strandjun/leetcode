/**
 * https://leetcode.com/problems/all-possible-full-binary-trees/
 * Medium    
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

/**
 * Tricks:
    The idea is that perfect binary tree of 1 i.e. PBT(1) is a single node without left and right nodes. 
    A perfect binary tree of 3 is :
    - a node with left = PBT(1) and right = PBT(1)
    A perfect binary tree of 5 is : 
    - a node with left = PBT(3) and right = PBT(1)
    - a node with left = PBT(1) and right = PBT(3)
    A perfect binary tree of 7 is : 
    - a node with left = PBT(5) and right = PBT(1)
    - a node with left = PBT(3) and right = PBT(3)
    - a node with left = PBT(1) and right = PBT(5)
    and so on...
 */

function allPossibleFBT(n: number): Array<TreeNode | null> {
    if (n % 2 === 0) {
        return []
    }

    const memo: Array<Array<TreeNode | null>> = []
    const helper = (n: number) => {
        if (memo[n] && memo[n].length) {
            return memo[n]
        }

        if (n == 1) {
            memo[1] = [new TreeNode(0)]
            return [new TreeNode(0)]
        }

        const tree: Array<TreeNode | null> = []
        for (let i = 1; i < n - 1; i = i + 2) {
            const lt = helper(i)
            const rt = helper(n - 1 - i)

            lt.forEach(ltItem => {
                rt.forEach(rtItem => {
                    tree.push(new TreeNode(0, ltItem, rtItem))
                })
            })
        }

        memo[n] = tree
        return memo[n]
    }

    return helper(n)
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test0", () => {
    assertEquals(allPossibleFBT(7), [[0, 0, 0, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0]]);
});

Deno.test("assertEquals Test0", () => {
    assertEquals(allPossibleFBT(3), [[0, 0, 0]]);
});
