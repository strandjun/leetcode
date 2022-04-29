/**
 * https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/
 * Medium    
 */

function countMaxOrSubsets(nums: number[]): number {
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        max = nums[i] | max
    }

    let count = 0
    const subset: number[] = []
    let newset: number[] = []

    for (let i = 0; i < nums.length; i++) {
        newset = []
        newset.push(nums[i])
        if (nums[i] === max) {
            count++
        }
        subset.forEach(item => {
            if ((item | nums[i]) === max) {
                count++
            }
            newset.push(item | nums[i])
        })
        subset.push(...newset)
    }

    return count
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(countMaxOrSubsets([3, 1]), 2);
});

Deno.test("assertEquals Test", () => {
    assertEquals(countMaxOrSubsets([2, 2, 2]), 7);
});

Deno.test("assertEquals Test", () => {
    assertEquals(countMaxOrSubsets([3, 2, 1, 5]), 6);
});