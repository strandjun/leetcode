/**
 * https://leetcode.com/problems/subsets/
 * Medium - 78. Subsets
 */

/**
 * Q:
 *  1. What is the size/length of input?
 *  2. Does the solution set contain empty subsets?
 *  3. Do we have runtime or space limit?
 *  4. Can the input be empty or null?
 *  5. Do the subsets have an order? Is the [1, 2] equal to [2, 1]?
 */

// Time Complexity: O(n^3), Space Complexity: O(2^n)
// bfs
function subsets1(nums: number[]): number[][] {
    const res: number[][] = [[]]
    for (let i = 0; i < nums.length; i++) {
        const size = res.length
        for (let j = 0; j < size; j++) {
            res.push([...res[j], nums[i]])
        }
    }

    return res
}

// Time Complexity: O(2^n), Space Complexity: O(2^n)
// dfs | backtracking
function subsets(nums: number[]): number[][] {
    const res: number[][] = []

    const backtrack = (nums: number[], res: number[][], idx: number, path: number[]) => {
        res.push([...path])
        for (let i = idx; i < nums.length; i++) {
            path.push(nums[i])
            backtrack(nums, res, i + 1, path)
            path.pop()
        }
    }
    backtrack(nums, res, 0, [])

    console.log('res: ', res)
    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(subsets([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(subsets([0]), [[], [0]]);
});
