/**
 * https://leetcode.com/problems/flipping-an-image/description/
 * @param {number[][]} A
 * @return {number[][]}
 */

/**
 * stragegy steps:
 * 1. to filp an image horizontally: reverse every item
 * 2. to invert an image: reverse every item of item
 */

let reverseItem = function (arr) {
    // for(let i = 0, j = arr.length - 1; i < j;){
    // }
    let i = 0, j = arr.length - 1, temp;
    while (i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] == 0) {
            arr[k] = 1;
        } else {
            arr[k] = 0;
        }
    }
    return arr;
}
var flipAndInvertImage = function (arr) {
    for (let s = 0; s < arr.length; s++) {
        arr[s] = reverseItem(arr[s]);
    }
    return arr;
};


var A = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
// Output: [[1,0,0],[0,1,0],[1,1,1]]
/* Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
   Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]] */

// var A = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
/* Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
   Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]] */

console.log(flipAndInvertImage(A));