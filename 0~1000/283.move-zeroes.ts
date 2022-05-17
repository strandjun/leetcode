/**
 * https://leetcode.com/problems/move-zeroes/
 * Easy - 283. Move Zeroes
 * 
 * Follow up: Could you minimize the total number of operations done?
 * Pramp: Move Zeros To End
 * https://www.pramp.com/challenge/9PNnW3nbyZHlovqAvxXW
 */

/**
 * Do not return anything, modify nums in-place instead.
 */
function moveZeroes0(nums: number[]): number[] {
    let z = 0;
    for (let nz = 0; nz < nums.length; nz++) {
        if (nums[nz] != 0) {
            if (nz != z) {
                // exchange
                [nums[z], nums[nz]] = [nums[nz], nums[z]]
            }
            z++
        }
    }
    return nums
};

// snowBall solution
function moveZeroes(nums: number[]): number[] {
    let snowBallSize = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            snowBallSize++
        } else if (snowBallSize > 0) {
            nums[i - snowBallSize] = nums[i]
            nums[i] = 0
        }
    }
    return nums
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(moveZeroes([0]), [0]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(moveZeroes([]), []);
});

Deno.test("assertEquals Test", () => {
    assertEquals(moveZeroes([1]), [1]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(moveZeroes([0, 0]), [0, 0]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(moveZeroes([1, 0, 2]), [1, 2, 0]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(moveZeroes([6, 1, 0, 3, 0, -1, 2]), [6, 1, 3, -1, 2, 0, 0]);
});
