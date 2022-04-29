/**
 * https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/
 * Medium - 1828. Queries on Number of Points Inside a Circle
 */

const isInCircle = (point, query) => {
  const power =
    Math.pow(query[0] - point[0], 2) + Math.pow(query[1] - point[1], 2);
  if (Math.pow(power, 0.5) <= query[2]) {
    return true;
  }
  return false;
};
const countPoints1 = function (points, queries) {
  const res = [];
  let count = 0;
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < points.length; j++) {
      count += isInCircle(points[j], queries[i]) ? 1 : 0;
    }
    res.push(count);
    count = 0;
  }
  return res;
};

// more concise
const countPoints = function (points, queries) {
  const res = [];
  for (const [x, y, r] of queries) {
    let count = 0;
    for (const [a, b] of points) {
      count += (x - a) * (x - a) + (y - b) * (y - b) <= r * r ? 1 : 0;
    }
    res.push(count);
  }
  return res;
};

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

Deno.test('assertEquals Test', () => {
  assertEquals(
    countPoints(
      [
        [1, 3],
        [3, 3],
        [5, 3],
        [2, 2],
      ],
      [
        [2, 3, 1],
        [4, 3, 1],
        [1, 1, 2],
      ]
    ),
    [3, 2, 2]
  );
});

Deno.test('assertEquals Test', () => {
  assertEquals(
    countPoints(
      [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
      ],
      [
        [1, 2, 2],
        [2, 2, 2],
        [4, 3, 2],
        [4, 3, 3],
      ]
    ),
    [2, 3, 2, 4]
  );
});
