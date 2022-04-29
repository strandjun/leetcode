/**
 * https://leetcode.com/problems/find-center-of-star-graph/
 * Medium
 * 
 * Desc:
    There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

    You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.
 */

/**
 * Example:
    Example 1:
    Input: edges = [[1,2],[2,3],[4,2]]
    Output: 2
    Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

    Example 2:
    Input: edges = [[1,2],[5,1],[1,3],[1,4]]
    Output: 1
 */

/**
 * Constraints:
    3 <= n <= 105
    edges.length == n - 1
    edges[i].length == 2
    1 <= ui, vi <= n
    ui != vi
    The given edges represent a valid star graph.
 */

// for (let i = 0; i < arr.length; i++) {}
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter0 = function(edges) {
    if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
        return edges[0][0]
    }
    return edges[0][1]
};

// writing concise code
var findCenter = function (edges) {
    let [[a, b], [c, d]] = edges;
    return a === c || b === c ? c : d;
};

const edges = [[1,2],[2,3],[4,2]] // Output: 2
const edges1 = [[1,2],[5,1],[1,3],[1,4]] // Output: 1

console.log('res0: ', findCenter(edges))
console.log('res1: ', findCenter(edges1))
