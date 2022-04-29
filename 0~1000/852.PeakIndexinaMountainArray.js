/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let i = 0;
    while (i < A.length - 1 && A[i] < A[i + 1]) {
        i++;
    }
    return i;
};

var A = [0, 1, 2, 3, 5, 6, 8, 7, 1, 0]; //output:6
console.log(peakIndexInMountainArray(A));
