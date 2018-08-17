/**
 * https://leetcode.com/problems/maximal-rectangle/description/
 * @param {character[][]} matrix
 * @return {number}
 */
let mapVal = new Map();
var recursiveArea = function(matrix, row, column) {
    if (mapVal.has(`[${row}][${column}]`)) {
        return mapVal.get(`[${row}][${column}]`);
    }
    let tempArea = 0,
        tempAreaR = 0,
        tempAreaT = 0,
        jLen = matrix[row].length;
    for (let i = row; i < matrix.length; i++) {
        for (let j = column; j < jLen; j++) {
            if (j < matrix[row].length - 1) {
                // if not the right position
                tempAreaR = Math.max(
                    recursiveArea(matrix, i, j + 1),
                    tempAreaR
                );
                // console.log(`recursive: ${row}${column} use ${i}${j + 1}, tempAreaR: ${tempAreaR}`);
            }
            if (i < matrix.length - 1) {
                // if not the bottom position
                tempAreaT = Math.max(
                    recursiveArea(matrix, i + 1, j),
                    tempAreaT
                );
                // console.log(`recursive: ${row}${column} use ${i + 1}${j}, tempAreaT: ${tempAreaT}`);
            }

            if (matrix[i][j] == 1) {
                tempArea = Math.max(
                    tempArea,
                    j - column + 1,
                    (i - row + 1) * (j - column + 1)
                );
            } else if (matrix[i][j] == 0) {
                jLen = j;
                break;
            }
        }
    }
    let maxArea = Math.max(tempArea, tempAreaR, tempAreaT);
    mapVal.set(`[${row}][${column}]`, maxArea);
    // console.log(
    //     `[${row}][${column}] => ${maxArea}, tempArea: ${tempArea}, tempAreaR: ${tempAreaR}, tempAreaT: ${tempAreaT}`
    // );
    return maxArea;
};

var maximalRectangle = function(matrix) {
    if (matrix.length == 0) {
        return 0;
    }
    return recursiveArea(matrix, 0, 0);
};

var Input = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]; // Output: 6

var Input = [
    ["1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1", "0", "0", "0"],
    ["0", "1", "1", "1", "1", "0", "0", "0"]
]; // Output: 21

var Input = [["1", "0"]]; // Output: 1
var Input = [["0", "1"]]; // Output: 1
var Input = [["0", "1"], ["1", "0"]]; // Output: 1
var Input = [["1", "0"], ["1", "0"]]; // Output: 2
var Input = [
    ["1", "0", "1", "1", "0", "1"],
    ["1", "1", "1", "1", "1", "1"],
    ["0", "1", "1", "0", "1", "1"],
    ["1", "1", "1", "0", "1", "0"],
    ["0", "1", "1", "1", "1", "1"],
    ["1", "1", "0", "1", "1", "1"]
]; // Output: 8

var Input = [["0"]]; // Output: 0
console.log(maximalRectangle(Input));
