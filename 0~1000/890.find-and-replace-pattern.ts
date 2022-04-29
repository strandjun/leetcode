/**
 * https://leetcode.com/problems/find-and-replace-pattern/
 * Medium    
 */

function findAndReplacePattern1(words: string[], pattern: string): string[] {
    // set a val to pattern
    const valMap = new Map<string, string>()
    const res: string[] = []

    for (let i = 0; i < words.length; i++) {
        let flag = true
        for (let j = 0; j < pattern.length; j++) {
            if (valMap.has(pattern[j]) && valMap.get(pattern[j]) !== words[i][j]) {
                flag = false
                break
            }
            valMap.set(pattern[j], words[i][j])
        }
        if (flag && new Set(valMap.values()).size == valMap.size) {
            res.push(words[i])
        }
        valMap.clear()
    }

    return res
}

// optimized version, not good enough
function findAndReplacePattern(words: string[], pattern: string): string[] {
    // set a val to pattern
    const patternMap = new Map<string, string>()
    const valSet = new Set<string>()
    let flag = true

    const res: string[] = []

    for (let i = 0; i < words.length; i++) {
        flag = true
        for (let j = 0; j < pattern.length; j++) {
            if (patternMap.has(pattern[j])) {
                if (patternMap.get(pattern[j]) === words[i][j]) {
                    continue
                } else {
                    flag = false
                    break
                }
            }
            if (valSet.has(words[i][j])) {
                flag = false
                break
            }
            valSet.add(words[i][j])
            patternMap.set(pattern[j], words[i][j])
        }
        if (flag) {
            res.push(words[i])
        }
        valSet.clear()
        patternMap.clear()
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"), ["mee", "aqq"]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(findAndReplacePattern(["a", "b", "c"], "a"), ["a", "b", "c"]);
});
