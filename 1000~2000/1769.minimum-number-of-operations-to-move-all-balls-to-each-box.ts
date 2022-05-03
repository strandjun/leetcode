/**
 * https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 * Medium - 1769. Minimum Number of Operations to Move All Balls to Each Box
 */

// Brute Force, TC: O(n^2), SC: O(n)
function minOperations0(boxes: string): number[] {
  let res: number[] = [];

  for (let i = 0; i < boxes.length; i++) {
    let count = 0
    for (let j = 0; j < boxes.length; j++) {
      if (i === j) {
        continue
      }
      if (boxes[j] === "1") {
        count += Math.abs(j - i)
      }
    }
    res.push(count)
  }
  return res
}

// optimized: TC: O(2n), SC: O(3n)
function minOperations1(boxes: string): number[] {
  let res: number[] = [];

  let left: number[] = new Array(boxes.length).fill(0);
  let lCnt = boxes[0] === "1" ? 1 : 0;
  for (let i = 1; i < boxes.length; i++) {
    left[i] = left[i - 1] + lCnt
    if (boxes[i] === '1') {
      lCnt++;
    }
  }

  let right: number[] = new Array(boxes.length).fill(0);
  let rCnt = boxes[boxes.length - 1] === "1" ? 1 : 0;
  for (let i = boxes.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] + rCnt
    if (boxes[i] === '1') {
      rCnt++;
    }
  }

  for (let i = 0; i < boxes.length; i++) {
    res[i] = left[i] + right[i]
  }

  return res
}

// optimal: TC: O(2n), SC: O(n)
function minOperations(boxes: string): number[] {
  let res = new Array(boxes.length).fill(0);

  // ops: number of operations
  // cnt: number of balls from left to right
  for (let i = 0, ops = 0, cnt = 0; i < boxes.length; i++) {
    cnt += boxes[i] === "1" ? 1 : 0
    res[i] += ops
    ops += cnt
  }

  // cnt: number of balls from right to left
  for (let i = boxes.length - 1, ops = 0, cnt = 0; i >= 0; i--) {
    cnt += boxes[i] === "1" ? 1 : 0
    res[i] += ops
    ops += cnt
  }

  return res
}

import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
  assertEquals(minOperations("110"), [1, 1, 3]);
});

Deno.test("assertEquals Test", () => {
  assertEquals(minOperations("001011"), [11, 8, 5, 4, 3, 4]);
});
