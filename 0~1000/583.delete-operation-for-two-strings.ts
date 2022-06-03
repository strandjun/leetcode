/**
 * https://leetcode.com/problems/delete-operation-for-two-strings/
 * Medium - 583. Delete Operation for Two Strings
 */

/**
 * 
 * if (w1[i] == w2[j])
        dp[i][j] = dp[i-1][j-1] + 1 
 * else 
        dp[i][j] = max(dp[i-1][j], dp[i][j-1])
 * 
 */

// TC: O(), SC: O()
function minDistance(word1: string, word2: string): number {

    const len1 = word1.length
    const len2 = word2.length
    const dp = new Array(len1 + 1).fill(0)
    for (let i = 0; i < len1 + 1; i++) {
        dp[i] = new Array(len2 + 1).fill(0)
    }

    for (let i = 1; i < len1 + 1; i++) {
        for (let j = 1; j < len2 + 1; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return len1 + len2 - dp[len1][len2] * 2

};


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(minDistance("sea", "eat"), 2);
});

Deno.test("assertEquals Test", () => {
    assertEquals(minDistance("leetcode", "etco"), 4);
});
