/**
 * https://leetcode.com/problems/determine-color-of-a-chessboard-square/
 * Easy
 * 
 * Desc:
    You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

    Return true if the square is white, and false if the square is black.

    The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.
 */

/**
 * Example:
    Example 1:
    Input: coordinates = "a1"
    Output: false
    Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

    Example 2:
    Input: coordinates = "h3"
    Output: true
    Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
    
    Example 3:
    Input: coordinates = "c7"
    Output: false
 */

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const row = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    }
    const x = row[coordinates[0]]
    const y = coordinates[1]
    return (+x + +y) % 2 > 0
};

const coordinates = "a1"  // Output: false
const coordinates1 = "h3" // Output: true
const coordinates2 = "c7" // Output: false

console.log('res0: ', squareIsWhite(coordinates))
console.log('res1: ', squareIsWhite(coordinates1))
console.log('res2: ', squareIsWhite(coordinates2))
