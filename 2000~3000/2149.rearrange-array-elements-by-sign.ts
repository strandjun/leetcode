/**
 * https://leetcode.com/problems/rearrange-array-elements-by-sign/
 * Medium - 2149. Rearrange Array Elements by Sign
 */

/**
 * Q:
 *  1. What is the size of input?
 *  2. Do we need to modify in-place or return a new array?
 *  3. Can the input be empty or null?
 *  4. Do we have the runtime or space constraints?
 *  5. Is it possible for the input to contain 0?
 */

/**
 * Strategy:
 *  1. Brute: I'll have 2 arrays to store positive and negative nums respectively.
 *  2. in-place, O(N)

2 pointers
posIdx = 0
negIdx = 1
[-2, -5, -4, -8, 3, 1, 2, 4]
     n              p

[3, -2, 1, -5, 2, -4]

 */

// O(N + N/2)  O(2N)
function rearrangeArray1(nums: number[]): number[] {
    const pos: number[] = []
    const neg: number[] = []
    const res: number[] = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            pos.push(nums[i])
        } else {
            neg.push(nums[i])
        }
    }

    let j = 0
    while (j < pos.length) {
        res.push(pos[j])
        res.push(neg[j])
        j++
    }

    return res
}


// O(N)  O(N) for output
function rearrangeArray(nums: number[]): number[] {
    const res: number[] = []
    let posIdx = 0, negIdx = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res[posIdx] = nums[i]
            posIdx += 2
        } else {
            res[negIdx] = nums[i]
            negIdx += 2
        }
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(rearrangeArray([3, 1, -2, -5, 2, -4]), [3, -2, 1, -5, 2, -4]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(rearrangeArray([-1, 1]), [1, -1]);
});
