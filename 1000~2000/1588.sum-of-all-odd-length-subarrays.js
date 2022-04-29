/**
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 * Easy
 * 
 * Desc:
    Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

    A subarray is a contiguous subsequence of the array.

    Return the sum of all odd-length subarrays of arr.
 */

/**
 * Example:
    Example 1:
    Input: arr = [1,4,2,5,3]
    Output: 58
    Explanation: The odd-length subarrays of arr and their sums are:
    [1] = 1
    [4] = 4
    [2] = 2
    [5] = 5
    [3] = 3
    [1,4,2] = 7
    [4,2,5] = 11
    [2,5,3] = 10
    [1,4,2,5,3] = 15
    If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

    Example 2:
    Input: arr = [1,2]
    Output: 3
    Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

    Example 3:
    Input: arr = [10,11,12]
    Output: 66
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    /**
     * iterate arr find the starting point
     * calculate all the possible contiguous sub arr at this point
     * accumulate all the arr[item]
     */
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        // start position i
        for (let j = i; j < arr.length; j++) {
            if ((j - i) % 2 === 0) {
                let k = j - i
                while (k >= 0) {
                    res += arr[i + k]
                    k--
                }
            }
        }
    }
    return res;
};

// Mark a interesting method
/**
 * Instead of looping through each possible subarrays, we can use the method of contribution of each element in the total sum by its number of occurrence in subarrays.
*/
var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * getOccurrenceCount(i, arr.length);
    }
    return sum;
}
// The interesting part!
function getOccurrenceCount(index, arrayLength) {
    return Math.ceil(((index + 1) * (arrayLength - index))/2);
}

const arr = [1,4,2,5,3] // Output: 58
const arr1 = [1,2]       // Output: 3
const arr2 = [10,11,12]  // Output: 66

console.log('res0: ', sumOddLengthSubarrays(arr))
console.log('res1: ', sumOddLengthSubarrays(arr1))
console.log('res2: ', sumOddLengthSubarrays(arr2))
