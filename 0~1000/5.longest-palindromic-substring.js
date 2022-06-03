/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Medium - 5. Longest Palindromic Substring
 */

// Brute force, TC: O(n^3), SC: O(1)
var longestPalindrome0 = function (s) {
	const helper = (str, l, r) => {
		while (l <= r) {
			if (str[l] !== str[r]) {
				return false;
			}
			l++;
			r--;
		}
		return true;
	};

	let res = s.charAt(0);

	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j < s.length; j++) {
			if (helper(s, i, j)) {
				// got a palindrome
				if (res.length < j - i + 1) {
					res = s.substring(i, j + 1);
				}
			}
		}
	}

	return res;
};

// Dynamic Programming, TC: O(n^2), SC: O(1)
var longestPalindrome = function (s) {
	// ll: Left index of the longest palindrome.
	// rr: Right index of the longest palindrome.
	let ll = 0,
		rr = 0;

	// Iterate all palindromes with center indices
	// [..., i, ...] or [... i, i+1, ...]
	for (let i = 0; i < s.length; i++) {
		for (let j of [i, i + 1]) {
			// only iterate 2 times
			for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
				// extend to find a new palindrome [l, ..., i, j, ..., r]
				// Update the ll, rr if the newly found palindrome is longer than the existing one.
				[ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];
		}
	}
	return s.substring(ll, rr + 1);
};

// TC: O(n^3), SC: O(1)

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

Deno.test('assertEquals Test', () => {
	assertEquals(longestPalindrome('babad'), 'bab'); // 'aba'
});

Deno.test('assertEquals Test', () => {
	assertEquals(longestPalindrome('cbbd'), 'bb');
});
