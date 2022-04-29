/**
 * https://leetcode.com/problems/subsets-ii/
 * Medium - 90. Subsets II
 */

// Time Complexity: O(nlogn + 2^n), Space Complexity: O()
// backtracking / dfs
function subsetsWithDup1(nums: number[]): number[][] {
    const res: number[][] = []
    nums.sort((a, b) => a - b)

    const backtracking = (nums: number[], res: number[][], idx: number, curr: number[]) => {

        res.push([...curr])
        for (let i = idx; i < nums.length; i++) {
            if (i > idx && nums[i] === nums[i - 1]) {
                continue
            }
            curr.push(nums[i])
            backtracking(nums, res, i + 1, curr)
            curr.pop()
        }

    }

    backtracking(nums, res, 0, [])

    return res
}

// Time Complexity: O(nlogn + n^2), Space Complexity: O(1)
// bfs
function subsetsWithDup(nums: number[]): number[][] {
    const res: number[][] = [[]]
    nums.sort((a, b) => a - b)
    let prevIdx = 0

    for (let i = 0; i < nums.length; i++) {
        // nums[i]
        const len = res.length
        for (let j = prevIdx; j < len; j++) {
            res.push([...res[j], nums[i]])
            if (i + 1 < nums.length && nums[i + 1] === nums[i]) {
                prevIdx = len
            } else {
                prevIdx = 0
            }
        }
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(subsetsWithDup([1, 2, 2]), [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(subsetsWithDup([0]), [[], [0]]);
});
