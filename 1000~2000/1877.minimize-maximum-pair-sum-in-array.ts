/**
 * https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 * Medium
 */

function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b)

  let res = 0
  for (let i = 0; i < Math.ceil(nums.length / 2); i++) {
    res = Math.max(res, nums[i] + nums[nums.length - 1 - i])
  }

  return res
}

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

Deno.test('assertEquals Test0', () => {
  assertEquals(minPairSum([3, 5, 2, 3]), 7);
});

Deno.test('assertEquals Test1', () => {
  assertEquals(minPairSum([3, 5, 4, 2, 4, 6]), 8);
});

Deno.test('assertEquals Test2', () => {
  assertEquals(minPairSum([4, 1, 5, 1, 2, 5, 1, 5, 5, 4]), 8)
})

Deno.test('assertEquals Test3', () => {
  assertEquals(minPairSum([5, 3, 5, 2, 1, 5, 5, 2, 3, 1]), 7)
})