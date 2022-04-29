/**
 * https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
 * Medium
 * 
 * Desc:
    Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

    A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

    Note that points on the edge of a vertical area are not considered included in the area.
 */

/**
 * Example:
    Example 1:
    Input: points = [[8,7],[9,9],[7,4],[9,7]]
    Output: 1
    Explanation: Both the red and the blue area are optimal.
    
    Example 2:
    Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
    Output: 3
 */

/**
 * Constraints:
    n == points.length
    2 <= n <= 105
    points[i].length == 2
    0 <= xi, yi <= 109
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let res = 0

    points.sort((a, b) => a[0] - b[0])
    for (let i = 1; i < points.length; i++) {
        res = Math.max(res, points[i][0] - points[i-1][0])
    }
    return res
};

const points  = [[8,7],[9,9],[7,4],[9,7]]             // Output: 1
const points1 = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]] // Output: 3

console.log('res0: ', maxWidthOfVerticalArea(points))
console.log('res1: ', maxWidthOfVerticalArea(points1))
