/**
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
 * Medium - 1910. Remove All Occurrences of a Substring
 */

// Time Complexity: O(), Space Complexity:O()
function removeOccurrences1(s: string, part: string): string {
    const recur = (s: string, p: string): string => {
        if (s.indexOf(p) < 0) {
            return s
        }
        return recur(s.replace(p, ''), p)
    }

    return recur(s, part)
}

// Time Complexity: O(m * 2n), Space Complexity:O(1)
function removeOccurrences(s: string, part: string): string {
    while (true) {
        const idx = s.indexOf(part);
        if (idx === -1) return s;
        s = s.replace(part, '');
    }
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(removeOccurrences("daabcbaabcbc", "abc"), "dab");
});

Deno.test("assertEquals Test", () => {
    assertEquals(removeOccurrences("axxxxyyyyb", "xy"), "ab");
});
