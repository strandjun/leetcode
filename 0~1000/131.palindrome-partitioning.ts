/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * Medium - 131. Palindrome Partitioning
 */

/**
 * Q:
 *  1. palindrome?
 *  2. empty or null?
 *  3. only lowercase english letter?
 *  4. duplicate palindrome?
 *  5. change letter order?
 */

/**
 * 错误做法
 * 没做出来，甚至不知道为啥出不来???
 * 不用递归改成for循环就出来了...
 */
function partition0(s: string): string[][] {
    const res: string[][] = []

    const isPalindrome = (str: string): boolean => {
        let start = 0
        let end = str.length - 1
        while (start < end) {
            if (str.charAt(start) === str.charAt(end)) {
                start++
                end--
            } else {
                return false
            }
        }
        return true
    }

    const isAllPalindrome = (arr: string[]) => {
        if (arr.length === 0) {
            return false
        }
        for (let i = 0; i < arr.length; i++) {
            if (!isPalindrome(arr[i])) {
                return false
            }
        }
        return true
    }

    console.log('====start====')

    const backtracking = (res: string[][], curr: string[], remain: string) => {
        if (remain.length <= 0) {
            const curPartition = [...curr]
            if (isAllPalindrome(curPartition)) {
                res.push(curPartition)
            }
            return
        }

        const curLetter = remain.charAt(0)
        remain = remain.substring(1)

        // console.log('0curr, curLetter, remain: ', curr, curLetter, remain)
        // add a new letter item
        // curr.push(curLetter)
        // backtracking(res, curr, remain)
        // curr.pop()
        // console.log('1curr, curLetter, remain: ', curr, curLetter, remain)

        // curr last item add a new letter


        console.log('0curr, remain: ', curr, remain)
        let tmp = ''
        if (curr.length === 0) {
            curr.push(curLetter)
        } else {
            tmp = curr[curr.length - 1]
            curr[curr.length - 1] += curLetter
        }
        console.log('1curr, remain: ', curr, remain)
        backtracking(res, curr, remain)

        if (curr.length === 1) {
            curr.pop()
        } else {
            curr[curr.length - 1] = tmp
        }
        console.log('2curr, remain: ', curr, remain)
    }

    backtracking(res, [], s)
    console.log('res: ', res)
    return res
}

// Time Complexity: O(), Space Complexity: O()
// backtracking
function partition1(s: string): string[][] {
    const res: string[][] = []

    const isPalindrome = (str: string, start: number, end: number): boolean => {
        while (start < end) {
            if (str.charAt(start) === str.charAt(end)) {
                start++
                end--
            } else {
                return false
            }
        }
        return true
    }

    const backtracking = (res: string[][], curr: string[], str: string, start: number) => {
        if (start === str.length) {
            res.push([...curr])
            return
        }
        for (let i = start; i < str.length; i++) {
            if (isPalindrome(str, start, i)) {
                curr.push(s.substring(start, i + 1))
                backtracking(res, curr, str, i + 1)
                curr.pop()
            }
        }
    }

    backtracking(res, [], s, 0)
    return res
}

/**
 * 不用递归实现最初的思路:
 * 1. 存一个curr的数组，从string的remain中取出第一位，
 *  1.1 当成独立item加入到curr
 *  1.2 其次加入到curr的最后一位中
 * curr 变为俩分支
 */
function partition(s: string): string[][] {
    const res: string[][] = [[s.charAt(0)]]

    const isPalindrome = (str: string): boolean => {
        if (str.length === 0) {
            return false
        }
        let start = 0
        let end = str.length - 1
        while (start < end) {
            if (str.charAt(start) === str.charAt(end)) {
                start++
                end--
            } else {
                return false
            }
        }
        return true
    }

    const isAllPalindrome = (arr: string[]) => {
        if (arr.length === 0) {
            return false
        }
        for (let i = 0; i < arr.length; i++) {
            if (!isPalindrome(arr[i])) {
                return false
            }
        }
        return true
    }

    for (let i = 1; i < s.length; i++) {
        const cur = s.charAt(i)
        const size = res.length
        for (let j = 0; j < size; j++) {
            const curr = [...res[j]]
            const last = curr[curr.length - 1]

            res[j][curr.length - 1] = last + cur

            if (isPalindrome(last)) {
                res.push([...curr, cur])
            }
        }
    }

    console.log('res: ', res)
    console.log('res1: ', res.filter(s => isAllPalindrome(s)))
    return res.filter(s => isAllPalindrome(s))
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        partition("abbab"),
        [["a", "b", "b", "a", "b"], ["a", "b", "bab"], ["a", "bb", "a", "b"], ["abba", "b"]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        partition("aab"),
        [["a", "a", "b"], ["aa", "b"]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        partition("a"),
        [["a"]]
    );
});
