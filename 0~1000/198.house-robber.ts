/**
 * https://leetcode.com/problems/word-search/house-robber
 * Medium - 198. House Robber
 */

function rob1(nums: number[]): number {
    // edge cases
    if (nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }

    const sum: number[] = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < nums.length; i++) {
        sum.push(Math.max(nums[i] + sum[i - 2], sum[i - 1]))
    }

    return sum[sum.length - 1]
}

function rob(nums: number[]): number {
    // edge cases
    if (nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }

    let prev: number = nums[0]
    let cur: number = Math.max(nums[0], nums[1])
    let tmp = 0

    for (let i = 2; i < nums.length; i++) {
        tmp = cur
        cur = Math.max(nums[i] + prev, cur)
        prev = tmp
    }

    return cur
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(rob([2, 1, 1, 2]), 4);
});

Deno.test("assertEquals Test", () => {
    assertEquals(rob([1, 2, 3, 1]), 4);
});

Deno.test("assertEquals Test", () => {
    assertEquals(rob([2, 7, 9, 3, 1]), 12);
});

