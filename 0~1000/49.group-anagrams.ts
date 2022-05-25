/**
 * https://leetcode.com/problems/group-anagrams/
 * Medium - 49. Group Anagrams
 */

// sorting, Time Complexity: O(N * KlogK), Space Complexity: O(M)
function groupAnagrams0(strs: string[]): string[][] {
    const map = new Map()
    for (let i = 0; i < strs.length; i++) {
        let cur = strs[i].split('')
        cur.sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0))

        const str = cur.join('')
        if (map.has(str)) {
            map.set(str, [...map.get(str), strs[i]])
        } else {
            map.set(str, [strs[i]])
        }
    }

    return Array.from(map.values())
};

// use charcode count,Time Complexity: O(NK), Space Complexity: O(M)
function groupAnagrams(strs: string[]): string[][] {
    interface Mapping {
        [index: string]: string[];
    }
    let mapping: Mapping = {}
    const code_a = 'a'.charCodeAt(0)

    for (let i = 0; i < strs.length; i++) {
        let charCount: number[] = new Array(26).fill(0)
        for (let c of strs[i]) {
            charCount[c.charCodeAt(0) - code_a]++
        }
        const keys: string = charCount.join('#')
        if (!mapping[keys]) {
            mapping[keys] = []
        }
        mapping[keys].push(strs[i])
    }

    return Object.values(mapping)
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
        [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(groupAnagrams([""]), [[""]]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        groupAnagrams(["a"]), [["a"]]);
});
