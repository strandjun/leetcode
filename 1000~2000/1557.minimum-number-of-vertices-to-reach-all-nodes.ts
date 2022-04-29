/**
 * https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
 * Medium    
 */

function findSmallestSetOfVertices1(n: number, edges: number[][]): number[] {
    // define 2 groups
    // one for startting vertex, the other for those can be reached

    const res = new Set<number>()
    const reached = new Set<number>()

    for (const [key, val] of edges) {
        reached.add(val)

        if (!res.has(key) && !reached.has(key)) {
            res.add(key)
        }
        if (reached.has(key)) {
            res.delete(key)
        }
        if (reached.has(val)) {
            res.delete(val)
        }
    }

    return [...res]

}


function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {

    const res: number[] = []
    const indegree = new Array(n).fill(0)

    for (const e of edges) {
        indegree[e[1]]++
    }

    for (let i = 0; i < n; i++) {
        if (!indegree[i]) {
            res.push(i)
        }
    }

    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(findSmallestSetOfVertices(6, [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]), [0, 3]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(findSmallestSetOfVertices(5, [[0, 1], [2, 1], [3, 1], [1, 4], [2, 4]]), [0, 2, 3]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(findSmallestSetOfVertices(4, [[1, 2], [3, 2], [1, 3], [1, 0], [0, 2], [0, 3]]), [1]);
});
