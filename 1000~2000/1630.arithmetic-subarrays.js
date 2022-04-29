/**
 * https://leetcode.com/problems/arithmetic-subarrays/
 * Medium
 */

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  // get a order func
  // get a check func

  const orderFunc = (arr) => {
    return arr.sort((a, b) => a - b);
  };
  const checkFunc = (arr) => {
    const num = arr[1] - arr[0];
    for (let c = 2; c < arr.length; c++) {
      if (arr[c] - arr[c - 1] != num) {
        return false;
      }
    }
    return true;
  };

  const res = [];
  for (let i = 0; i < l.length; i++) {
    if (r[i] - l[i] < 2) {
      res.push(true);
    } else {
      const subArr = orderFunc(nums.slice(l[i], r[i] + 1));
      res.push(checkFunc(subArr));
    }
  }
  return res;
};

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

const nums = [4, 6, 5, 9, 3, 7],
  l = [0, 0, 2],
  r = [2, 3, 5];
Deno.test('assertEquals Test', () => {
  assertEquals(checkArithmeticSubarrays(nums, l, r), [true, false, true]);
});

const nums1 = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
  l1 = [0, 1, 6, 4, 8, 7],
  r1 = [4, 4, 9, 7, 9, 10];
Deno.test('assertEquals1 Test', () => {
  assertEquals(checkArithmeticSubarrays(nums1, l1, r1), [
    false,
    true,
    false,
    false,
    true,
    true,
  ]);
});
