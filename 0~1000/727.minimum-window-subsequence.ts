/**
 * https://leetcode.com/problems/minimum-window-subsequence/
 * Hard - 727. Minimum window subsequence (premium)
 */

/**
 * Question:
 * Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.
 * 
 * If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.
 * 
 * 
 * Example:
 * Input : S = "abcdebdde", T = "bde"
 * Output: "bcde"
 * Explanation: 
 *      There are many substrings with "bde" but the smallest amongst them is "bcde" and "bdde" of length 4. 
 *      Out of these 2, "bcde" occurs first, Hence it is the answer.
 * 
 */

// Sliding Window
function minWindow0(S: string, T: string): string {

    let min = S.length
    let start = -1

    let j = 0

    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === T.charAt(j)) {
            j++
            if (j >= T.length) {
                /**
                 * find one vaild substring
                 * then go back to get the nearest one
                 */
                const end = i + 1
                j--

                /**
                 * 精简版：
                 * 
                    while (--j >= 0) {
                        while (S.charAt(i--) != T.charAt(j));
                    }
                 */
                while (j >= 0) {
                    if (S.charAt(i) === T.charAt(j)) {
                        j--
                    }
                    i--
                }

                i++
                j++
                // if valid
                if (end - i < min) {
                    min = end - i
                    start = i
                }
                i = end
            }
        }
    }

    return start == -1 ? "" : S.substring(start, start + min)
}


/**
 * ! 以起点start建立dp二维数组 
 * 
 * S: 'abcdebdde', T: 'bde'
 * dp: 
 * [
 *          a  b  c  d  e  b  d  d  e
 *   _ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 *   b [-1,-1, 1, 1, 1, 1, 5, 5, 5, 5],
 *   d [-1,-1,-1,-1, 1, 1, 1, 5, 5, 5],
 *   e [-1,-1,-1,-1,-1, 1, 1, 1, 1, 5],
 * ]
 * 
 */
// DP
function minWindow(S: string, T: string): string {

    const t = T.length  // row
    const s = S.length  // col 0~s
    const dp = new Array(t + 1).fill(-1)

    for (let i = 0; i < t + 1; i++) {
        dp[i] = new Array(s + 1).fill(-1)
    }
    for (let j = 0; j < s + 1; j++) {
        // fill the first row with start index
        dp[0][j] = j
    }

    for (let i = 1; i < t + 1; i++) {
        for (let j = 1; j < s + 1; j++) {
            if (T.charAt(i - 1) == S.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = dp[i][j - 1]
            }
        }
    }

    let start = -1, min = s + 1;
    for (let j = 1; j < s + 1; j++) {
        // check for the last row
        if (dp[t][j] != -1) {
            const startIdx = dp[t][j]
            const curLen = j - startIdx
            if (curLen < min) {
                start = startIdx
                min = curLen
            }
        }
    }

    return start == -1 ? "" : S.substring(start, start + min)
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(minWindow("abcdebdde", 'bde'), 'bcde');
});

Deno.test("assertEquals Test", () => {
    assertEquals(minWindow("abbcabbacc", 'abc'), 'abbc');
});
