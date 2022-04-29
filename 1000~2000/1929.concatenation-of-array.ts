/**
 * https://leetcode.com/problems/concatenation-of-array/
 * Easy    
 */

function getConcatenation(nums: number[]): number[] {
    // return nums.concat(nums)
    return [...nums, ...nums]
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

const input = [1, 2, 1]
const output = [1, 2, 1, 1, 2, 1]

const input1 = [1, 3, 2, 1]
const output1 = [1, 3, 2, 1, 1, 3, 2, 1]

Deno.test("assertEquals Test", () => {
    assertEquals(getConcatenation(input), output);
});

Deno.test("assertEquals Test", () => {
    assertEquals(getConcatenation(input1), output1);
});
