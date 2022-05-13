/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Medium 347. Top K Frequent Elements
 */

// TC: O(nlogn), SC: O(3n)
var topKFrequent0 = function (nums, k) {
  let res = [];

  // get the map, TC: O(l)
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  // sorted by count, mlogm
  const cnts = [];
  for (let [num, count] of map) {
    cnts.push([num, count]);
  }
  cnts.sort((m, n) => n[1] - m[1]);

  // get the first k num
  for (let i = 0; i < k; i++) {
    res.push(cnts[i][0]);
  }

  return res;
};

// Optimization: TC: O(n), SC: O(3n)
var topKFrequent = function (nums, k) {
  const res = [];
  const cnts = [];
  const map = new Map();

  // get the map, TC: O(l)
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  // sorted by count, mlogm
  for (let [num, count] of map) {
    cnts[count] = (cnts[count] || new Set()).add(num);
  }

  // get the first k num
  for (let i = cnts.length - 1; i >= 0; i--) {
    if (cnts[i]) {
      res.push(...cnts[i]);
    }
    if (res.length == k) {
      return res;
    }
  }

  return res;
};

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

Deno.test('assertEquals Test', () => {
  assertEquals(topKFrequent([3, 0, 1, 0], 1), [0]);
});

Deno.test('assertEquals Test', () => {
  assertEquals(topKFrequent([1, 2], 2), [1, 2]);
});

Deno.test('assertEquals Test', () => {
  assertEquals(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
});

Deno.test('assertEquals Test', () => {
  assertEquals(topKFrequent([1], 1), [1]);
});
