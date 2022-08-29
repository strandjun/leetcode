/**
 * https://leetcode.com/problems/unique-paths/
 * Medium - 62. Unique Paths
 */

/**
 * It's a Math permutation problem.
 * C(8,2) = 8!/(6!*2!) => (m+n)!/(m!*n!)
 */

/**
 ** DP Version 1
 * initial:  dp[i][0] = dp[0][j] = 1
 * equation: dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * TC: O(m * n), SC: O(m * n)
 */
const uniquePaths1 = function (m, n) {
	const dp = new Array(m);
	dp[0] = new Array(n).fill(1);

	for (let r = 1; r < m; r++) {
		dp[r] = new Array(n).fill(0);
		dp[r][0] = 1;
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}
	return dp[m - 1][n - 1];
};

/**
 ** DP Version 2, improving space complexity
 * initial, use 2 rows:
 *      pre = new Array(n).fill(1)
 *      cur = new Array(n).fill(1)
 * equation: cur[j] = pre[j] + cur[j-1]
 * TC: O(m * n), SC: O(n * 2)
 */
const uniquePaths2 = function (m, n) {
	let pre = new Array(n).fill(1);
	let cur = new Array(n).fill(1);

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			cur[j] = pre[j] + cur[j - 1];
		}
		[pre, cur] = [cur, pre];
	}
	return pre[n - 1];
};

/**
 ** DP Version 3, improving space complexity
 * initial, only use 1 rows:
 *      cur = new Array(n).fill(1)
 * equation: cur[j] += cur[j-1]
 * TC: O(m * n), SC: O(n)
 */
const uniquePaths3 = function (m, n) {
	const cur = new Array(n).fill(1);

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			cur[j] += cur[j - 1];
		}
	}
	return cur[n - 1];
};

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

Deno.test('assertEquals Test', () => {
	assertEquals(uniquePaths2(3, 7), 28);
});

Deno.test('assertEquals Test', () => {
	assertEquals(uniquePaths2(3, 2), 3);
});
