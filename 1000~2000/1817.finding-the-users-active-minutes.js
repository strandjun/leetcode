/**
 * https://leetcode.com/problems/finding-the-users-active-minutes/
 * Medium
 */

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const res = new Array(k).fill(0);
  const tmpMap = new Map();

  for (let i = 0; i < logs.length; i++) {
    const id = logs[i][0];
    const timeSet = tmpMap.has(id) ? tmpMap.get(id) : new Set();

    timeSet.add(logs[i][1]);
    tmpMap.set(id, timeSet);
  }

  for (const val of tmpMap.values()) {
    res[val.size - 1]++;
  }

  return res;
};

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

const logs = [
    [0, 5],
    [1, 2],
    [0, 2],
    [0, 5],
    [1, 3],
  ],
  k = 5;
Deno.test('assertEquals Test', () => {
  assertEquals(findingUsersActiveMinutes(logs, k), [0, 2, 0, 0, 0]);
});

const logs1 = [
    [1, 1],
    [2, 2],
    [2, 3],
  ],
  k1 = 4;
Deno.test('assertEquals Test', () => {
  assertEquals(findingUsersActiveMinutes(logs1, k1), [1, 1, 0, 0]);
});
