/**
 * https://leetcode.com/problems/letter-tile-possibilities/
 * Medium    
 */

// Yuri Version
function numTilePossibilities1(tiles: string): number {
    const seen = new Set<string>();
    countPossbilities(tiles, seen, new Set<number>(), "");
    return seen.size - 1;
}

function countPossbilities(
    tiles: string,
    seen: Set<string>,
    seenIdx: Set<number>,
    str: string
) {
    if (seen.has(str)) {
        return;
    }
    seen.add(str);
    for (let i = 0; i < tiles.length; i++) {
        if (seenIdx.has(i)) {
            continue;
        }
        seenIdx.add(i);
        countPossbilities(tiles, seen, seenIdx, str + tiles.charAt(i));
        seenIdx.delete(i);
    }
}

function numTilePossibilities2(tiles: string): number {
    let count = 0
    const seen = new Set<string>()
    const seenIdx = new Set<number>()

    const permutation = (str: string, seenIdx: Set<number>) => {
        if (seen.has(str)) {
            return
        }
        seen.add(str)
        count++

        for (let i = 0; i < tiles.length; i++) {
            if (seenIdx.has(i)) {
                continue
            }
            seenIdx.add(i)
            permutation(str + tiles[i], seenIdx)
            seenIdx.delete(i)
        }
    }

    permutation('', seenIdx)
    return count - 1
}

function numTilePossibilities(tiles: string): number {
    const count = new Array(26).fill(0)
    for (let i = 0; i < tiles.length; i++) {
        count[tiles.charCodeAt(i) - 'A'.charCodeAt(0)]++
    }

    const dfs = (arr: number[]) => {
        let sum = 0

        for (let i = 0; i < 26; i++) {
            if (arr[i] === 0) {
                continue
            }
            sum++
            arr[i]--
            sum += dfs(arr)
            arr[i]++
        }
        return sum
    }

    return dfs(count)
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(numTilePossibilities("AAB"), 8);
});

Deno.test("assertEquals Test", () => {
    assertEquals(numTilePossibilities("AAABBC"), 188);
});

Deno.test("assertEquals Test", () => {
    assertEquals(numTilePossibilities("V"), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(numTilePossibilities(""), 0);
});
