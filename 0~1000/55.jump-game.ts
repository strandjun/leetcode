/**
 * https://leetcode.com/problems/jump-game/
 * Medium - 55. Jump Game
 */

/**
 * dp
 * dp[n] = dp[n-1] + nums[i](>=1)
 * [2, 3, 1, 1, 4]
 * 
 * 
 * steps:
 * 
 * itrate every element of nums
 * try every path to the end, if reach the last one, return true
 * otherwise return false
 */

// TC: O(), SC: O()
function canJump0(nums: number[]): boolean {
    if (nums.length <= 1) {
        return true
    }

    let max = 0 + nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (i > max) {
            return false
        }
        max = Math.max(max, nums[i] + i)
    }
    return true
}

function canJump(nums: number[]): boolean {
    if (!nums.length) {
        return true
    }

    let max = nums[0]
    for (let i = 0; i <= max; i++) {
        max = Math.max(max, nums[i] + i)
        if (max >= nums.length - 1) {
            return true
        }
    }
    return false
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(canJump([2, 3, 1, 1, 4]), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(canJump([3, 2, 1, 0, 4]), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(canJump([2, 5, 0, 0]), true);
});
