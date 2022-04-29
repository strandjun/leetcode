/**
 * https://leetcode.com/problems/construct-string-with-repeat-limit/
 * Medium - 2182. Construct String With Repeat Limit
 */

/**
 * Q:
 *  1. 
 *  2. 
 */

/**
 * Strategy:
 *  Brute force: 
 */

// Time Complexity: O(), Space Complexity:O()
function repeatLimitedString(s: string, repeatLimit: number): string {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        let cur = 1
        if (map.has(s[i])) {
            cur = map.get(s[i]) + 1
        }
        map.set(s[i], cur)
    }

    const keys = Array.from(map.keys())
    keys.sort((a, b) => a > b ? -1 : 1)

    // keys: z c a
    // zzcccca
    let l = 0
    let res = ''
    while (l < s.length) {
        if (keys.length === 0) {
            break
        }
        const count = map.get(keys[0])
        if (count <= repeatLimit) {
            res += keys[0].repeat(count)
            l += count
            keys.shift()
        } else {
            const secondCount = map.get(keys[1])
            res += keys[0].repeat(repeatLimit)
            if (keys.length <= 1) {
                break
            }
            res += keys[1]
            map.set(keys[0], count - repeatLimit)
            if (secondCount > 1) {
                map.set(keys[1], map.get(keys[1]) - 1)
            } else {
                keys.splice(1, 1)
            }
            l += repeatLimit + 1
        }
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

// Deno.test("assertEquals Test", () => {
//     assertEquals(repeatLimitedString("cczazcc", 3), "zzcccac");
// });

Deno.test("assertEquals Test", () => {
    assertEquals(repeatLimitedString("aababab", 2), "bbabaa");
});
