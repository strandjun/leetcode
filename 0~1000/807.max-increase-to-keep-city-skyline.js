/**
 * https://leetcode.com/problems/max-increase-to-keep-city-skyline/
 * Medium
 * 
 * Desc:
    In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

    At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

    What is the maximum total sum that the height of the buildings can be increased?
 */

/**
 * Example:
    Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
    Output: 35
    Explanation: 
    The grid is:
    [ [3, 0, 8, 4], 
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0] ]

    The skyline viewed from top or bottom is: [9, 4, 8, 7]
    The skyline viewed from left or right is: [8, 7, 9, 3]

    The grid after increasing the height of buildings without affecting skylines is:

    gridNew = [ [8, 4, 8, 7],
                [7, 4, 7, 7],
                [9, 4, 8, 7],
                [3, 3, 3, 3] ]
    
 */

/**
 * Notes:
    1 < grid.length = grid[0].length <= 50.
    All heights grid[i][j] are in the range [0, 100].
    All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] rectangular prism.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline0 = function (grid) {
    let res = 0
    
    // get horizontal max arr
    let h_max = []
    const h_len = grid.length
    
    for (let h = 0; h < h_len; h++) {
        const max = Math.max(...grid[h])
        h_max.push(max)
    }

    let h_tmp = 0
    let max = 0
    let v_sum = 0
    let min = 0
    let v_max_sum = 0

    for (let v = 0; v < grid[0].length; v++) {
        // get vertical max & vertical sum
        h_tmp = 0
        max = 0
        v_sum = 0
        while (h_tmp < h_len) {
            max = Math.max(grid[h_tmp][v], max)
            v_sum += grid[h_tmp][v]
            h_tmp++
        }

        // get vertical max sum
        h_tmp = 0
        v_max_sum = 0
        while (h_tmp < h_len) {
            min = Math.min(h_max[h_tmp], max)
            v_max_sum += min
            h_tmp++
        }
    
        res += v_max_sum - v_sum
    }
    
    return res
};

var maxIncreaseKeepingSkyline = function (grid) {
   let rows = new Array(grid.length).fill(0)
   let cols = new Array(grid[0].length).fill(0)

   for (let i = 0; i < grid.length; i++) {
       for (let j = 0; j < grid[0].length; j++) {
           rows[i] = Math.max(grid[i][j], rows[i])
           cols[j] = Math.max(grid[i][j], cols[j])
       }
   }

   let res = 0
   for (let i = 0; i < grid.length; i++) {
       for (let j = 0; j < grid[0].length; j++) {
           res += Math.min(rows[i], cols[j]) - grid[i][j]
       }
   }
   return res
}

const grid = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
];
// Output: 35
const grid1 = [
  [59, 88, 44],
  [3, 18, 38],
  [21, 26, 51],
]; // Output: 117

console.log('res0: ', maxIncreaseKeepingSkyline(grid));
console.log('res1: ', maxIncreaseKeepingSkyline(grid1));
