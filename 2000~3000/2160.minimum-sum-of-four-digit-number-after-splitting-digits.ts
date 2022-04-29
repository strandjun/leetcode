/**
 * https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
 * Medium - 2160. Minimum Sum of Four Digit Number After Splitting Digits
 */

// for (let i = 0; i < arr.length; i++) {}
function minimumSum(num: number): number {
    let res = 0

    const nums: number[] = []
    while (num > 0) {
        nums.push(num % 10)
        num = Math.floor(num / 10)
    }

    nums.sort((a, b) => a - b)
    res += (nums[0] + nums[1]) * 10 + nums[2] + nums[3]
    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(minimumSum(2932), 52);
});

Deno.test("assertEquals Test", () => {
    assertEquals(minimumSum(4009), 13);
});
