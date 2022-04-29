/**
 * https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * Medium - 1415. The k-th Lexicographical String of All Happy Strings of Length n
 */

// for (let i = 0; i < arr.length; i++) {}
// Time Complexity: O(), Space Complexity: O()
// DFS
function getHappyString(n: number, k: number): string {
    const res: string[] = []
    const letters = ['a', 'b', 'c']

    const dfs = (letters: string[], res: string[], curr: string, len: number) => {
        if (len === 0) {
            res.push(curr)
            return
        }

        const last = curr.length ? curr[curr.length - 1] : ""
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === last) {
                continue
            }
            dfs(letters, res, curr + letters[i], len - 1)
        }
    }
    dfs(letters, res, "", n)

    if (res.length < k) {
        return ""
    }
    return res[k - 1]
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(getHappyString(3, 9), "cab");
});

Deno.test("assertEquals Test", () => {
    assertEquals(getHappyString(1, 3), "c");
});

Deno.test("assertEquals Test", () => {
    assertEquals(getHappyString(1, 4), "");
});
