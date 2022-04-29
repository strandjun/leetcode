/**
 * https://leetcode.com/problems/count-good-triplets/
 * Easy
 * 
 * Desc:
    Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

    A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

    0 <= i < j < k < arr.length
    |arr[i] - arr[j]| <= a
    |arr[j] - arr[k]| <= b
    |arr[i] - arr[k]| <= c
    Where |x| denotes the absolute value of x.

    Return the number of good triplets.
 */

/**
 * Example:
    Example 1:
    Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
    Output: 4
    Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
    
    Example 2:
    Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
    Output: 0
    Explanation: No triplet satisfies all conditions.
 */

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    // brute force
    const len = arr.length
    let res = 0
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++ ) {
            for (let k = j + 1; k < len; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a && 
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                ) {
                    res++
                }
            }
        }
    }
    return res
};

const arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3   // Output: 4
const arr1 = [1,1,2,2,3], a1 = 0, b1 = 0, c1 = 1 // Output: 0

console.log('res0: ', countGoodTriplets(arr, a, b, c))
console.log('res1: ', countGoodTriplets(arr1, a1, b1, c1))
