/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * Medium 238. Product of Array Except Self
 * 
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 */

// Type: prefix sum, TC: O(N), SC: O(N)
function productExceptSelf0(nums: number[]): number[] {
    const prefix = new Array(nums.length).fill(1)
    const suffix = new Array(nums.length).fill(1) // postfix
    const res = new Array(nums.length).fill(1)

    // get prefix/left products
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
    }

    // get suffix/right products
    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = nums[i + 1] * suffix[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix[i] * suffix[i] == 0 ? 0 : prefix[i] * suffix[i]
    }

    return res
};

// TC: O(N), SC: O(1)
function productExceptSelf(nums: number[]): number[] {
    let suffix = 1
    const res = new Array(nums.length).fill(1)

    // get prefix/left products
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1]
    }

    // get suffix/right products
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= suffix
        suffix *= nums[i]
    }

    return res
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
});

