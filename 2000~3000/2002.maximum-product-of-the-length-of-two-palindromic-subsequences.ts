/**
 * https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/
 * Medium - 2002. Maximum Product of the Length of Two Palindromic Subsequences
 */

// my brute try
function maxProduct(s: string): number {
    /**
     * steps:
     *  generate all possible subsequences
     *  find all Palindromic subsequences
     *  find the 2 maximum length
     */

    const isPalindrome = (s: string): boolean => {
        let m = 0
        let n = s.length - 1
        while (m < n) {
            if (s.charAt(m) !== s.charAt(n)) {
                return false
            }
            m++
            n--
        }
        return true
    }

    const disjoint = (idx1: Set<number>, idx2: Set<number>): boolean => {
        for (const k of idx1) {
            if (idx2.has(k)) {
                return false
            }
        }
        return true
    }

    const palindromicSubs: any[][] = []
    // generate all possible palindromic subsequences
    const generateSubs = (s: string, str: string, j: number, idx: number[]) => {
        if (j >= s.length) {
            return []
        }

        const cur = str + s.charAt(j)
        if (isPalindrome(cur)) {
            palindromicSubs.push([cur, new Set(idx)])
        }

        for (let i = j; i < s.length; i++) {
            generateSubs(s, cur, i + 1, [...idx, i + 1])
        }
    }

    for (let i = 0; i < s.length; i++) {
        generateSubs(s, '', i, [i])
    }

    let product = 1
    for (let m = 0; m < palindromicSubs.length; m++) {
        for (let n = 0; n < palindromicSubs.length; n++) {
            const first = palindromicSubs[m]
            const second = palindromicSubs[n]
            if (disjoint(first[1], second[1])) {
                product = Math.max(product, first[0].length * second[0].length)
            }
        }
    }

    // console.log('palindromicSubs: ', palindromicSubs)
    return product
}


// from c++ version, but TLE(Time Limit Exceeded)
function maxProduct1(s: string): number {

    const isPalindrome = (s: string) => {
        let m = 0
        let n = s.length - 1
        while (m < n) {
            if (s.charAt(m) !== s.charAt(n)) {
                return false
            }
            m++
            n--
        }
        return true
    }

    let res = 0
    const dfs = (s: string, i: number, s1: string, s2: string) => {
        if (i >= s.length) {
            if (isPalindrome(s1) && isPalindrome(s2)) {
                res = Math.max(res, s1.length * s2.length)
                return
            }
        }

        dfs(s, i + 1, s1 + s.charAt(i), s2)
        dfs(s, i + 1, s1, s2 + s.charAt(i))
        dfs(s, i + 1, s1, s2)
    }

    dfs(s, 0, '', '');

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

// Deno.test("assertEquals Test", () => {
//     assertEquals(maxProduct("leetcodecom"), 9);
// });

// Deno.test("assertEquals Test", () => {
//     assertEquals(maxProduct("bb"), 1);
// });

Deno.test("assertEquals Test", () => {
    assertEquals(maxProduct("accbcaxxcxx"), 25);
});
