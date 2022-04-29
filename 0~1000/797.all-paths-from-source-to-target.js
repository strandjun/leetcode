/**
 * https://leetcode.com/problems/all-paths-from-source-to-target/
 * Medium
 * 
 * Desc:
    Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

    The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).
 */

/**
 * Example:
    Example 1:
    Input: graph = [[1,2],[3],[3],[]]
    Output: [[0,1,3],[0,2,3]]
    Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

    Example 2:
    Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
    Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

    Example 3:
    Input: graph = [[1],[]]
    Output: [[0,1]]

    Example 4:
    Input: graph = [[1,2,3],[2],[3],[]]
    Output: [[0,1,2,3],[0,2,3],[0,3]]

    Example 5:
    Input: graph = [[1,3],[2],[3],[]]
    Output: [[0,1,2,3],[0,3]]
 */

/**
 * Constraints:
    n == graph.length
    2 <= n <= 15
    0 <= graph[i][j] < n
    graph[i][j] != i (i.e., there will be no self-loops).
    All the elements of graph[i] are unique.
    The input graph is guaranteed to be a DAG.
 */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget1 = function(graph) {
    const res = [...graph[0].map(k => [0, k])]
    
    for (let i = 1; i < graph.length; i++) {
        res.forEach((item, r) => {
            if (item.includes(i)) {
                if (!graph[i].length) {
                    res.splice(r, 1)
                } else {
                    let j = 1
                    while(j < graph[i].length) {
                        res.push([...res[r], graph[i][j]])
                        j++
                    }
                    res[r] = [...res[r], graph[i][0]]
                }
            }
        })
    }
    return res
};

var allPathsSourceTarget = function(graph) {
    const paths = []
    const dfs = (path, index) => {
        if (path[path.length - 1] == graph.length - 1) {
            paths.push(path)
            return
        }
        graph[index].forEach(item => {
            dfs([...path, item], item)
        })
    }

    dfs([0], 0)
    return paths
};


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

const graph1 = [[1,2],[3],[3],[]] // Output: [[0,1,3],[0,2,3]]
const graph2 = [[4,3,1],[3,2,4],[3],[4],[]] // Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
const graph3 = [[1],[]] // Output: [[0,1]]
const graph4 = [[1,2,3],[2],[3],[]] // Output: [[0,1,2,3],[0,2,3],[0,3]]
const graph5 = [[1,3],[2],[3],[]] // Output: [[0,1,2,3],[0,3]]
const graph6 = [[4,3,1],[3,2,4],[],[4],[]] // Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,4]]
const graph7 = [[2],[3],[1],[]] // Output: [[0,2,1,3]]

Deno.test("graph1 Test", () => {
    assertEquals(allPathsSourceTarget(graph1), [[0,1,3],[0,2,3]]);
});
Deno.test("graph2 Test", () => {
    assertEquals(allPathsSourceTarget(graph2), [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]);
});
Deno.test("graph3 Test", () => {
    assertEquals(allPathsSourceTarget(graph3), [[0,1]]);
});
Deno.test("graph4 Test", () => {
    assertEquals(allPathsSourceTarget(graph4), [[0,1,2,3],[0,2,3],[0,3]]);
});
Deno.test("graph5 Test", () => {
    assertEquals(allPathsSourceTarget(graph5), [[0,1,2,3],[0,3]]);
});
Deno.test("graph6 Test", () => {
    assertEquals(allPathsSourceTarget(graph6), [[0,4],[0,3,4],[0,1,3,4],[0,1,4]]);
});
Deno.test("graph7 Test", () => {
    assertEquals(allPathsSourceTarget(graph7), [[0,2,1,3]]);
});
