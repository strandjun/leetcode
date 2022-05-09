/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Medium - 3. Longest Substring Without Repeating Characters
 */

// TC: O(n*(m+s)) n^2, SC: O(1)
function lengthOfLongestSubstring0(s: string): number {
    let count = 0
    let tmp = ''
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        const idx = tmp.lastIndexOf(cur)
        if (idx >= 0) {
            count = Math.max(count, tmp.length)
            tmp = tmp.substring(idx + 1) + cur
        } else {
            tmp += cur
        }
    }
    // console.log(count, tmp)
    count = Math.max(count, tmp.length)

    return count
}

/**
 * two pointer sliding window tech
 * TC: O(n), SC: O(n)
 * 
 * For the Time Complexity:
 * We check each character in the string only once. 
 * Yes we would also have to delete the elements from the hashmap once a duplicate character is found, but this is a constant time operation because at max the map can store only 62 elements in our case before a duplicate is found.
 */
function lengthOfLongestSubstring1(s: string): number {
    let cnt = 0

    let map = new Map<string, number>()
    let start = 0
    let end = 0;

    for (end = 0; end < s.length; end++) {
        const cur = s.charAt(end)
        if (map.has(cur)) {
            // if duplicate
            cnt = Math.max(end - start, cnt)

            const newStart = (map.get(cur) || 0) + 1
            for (let i = start; i < newStart; i++) {
                map.delete(s.charAt(i))
            }
            start = newStart
        }

        map.set(cur, end)
    }

    cnt = Math.max(cnt, end - start)
    return cnt
}

// Sliding Window Optimized
function lengthOfLongestSubstring(s: string): number {
    let cnt = 0

    let map = new Map<string, number>()
    let start = 0
    let end = 0;

    for (; end < s.length; end++) {
        const cur = s.charAt(end)
        if (map.has(cur)) {
            // if duplicate
            start = Math.max((map.get(cur) || 0), start)
        }

        cnt = Math.max(end - start + 1, cnt)
        map.set(cur, end + 1)
    }

    cnt = Math.max(cnt, end - start)
    return cnt
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(lengthOfLongestSubstring("abcdeafbdgcbb"), 7);
});

Deno.test("assertEquals Test", () => {
    assertEquals(lengthOfLongestSubstring("abcabcbb"), 3);
});

Deno.test("assertEquals Test", () => {
    assertEquals(lengthOfLongestSubstring("dvdf"), 3);
});

Deno.test("assertEquals Test", () => {
    assertEquals(lengthOfLongestSubstring("aab"), 2);
});


Deno.test("assertEquals Test", () => {
    assertEquals(lengthOfLongestSubstring("bbbbb"), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(lengthOfLongestSubstring("pwwkew"), 3);
});
