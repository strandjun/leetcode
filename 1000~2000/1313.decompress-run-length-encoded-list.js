/**
 * https://leetcode.com/problems/decompress-run-length-encoded-list/
 * easy
 * 
 * Desc:
    We are given a list nums of integers representing a list compressed with run-length encoding.

    Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

    Return the decompressed list.
 */

/**
 * Example:
    Example 1:
    Input: nums = [1,2,3,4]
    Output: [2,4,4,4]
    Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
    The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
    At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
    
    Example 2:
    Input: nums = [1,1,2,3]
    Output: [1,3,3]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = []
    for(let i = 0; i < nums.length; i += 2) {
        // res.push(...new Array(nums[i]).fill(nums[i+1]));
        let f = nums[i]
        while(f > 0) {
            res.push(nums[i+1])
            f--
        }
    }
    return res
};

const nums1 = [1,2,3,4] // Output: [2,4,4,4]
const nums2 = [1,1,2,3] // Output: [1,3,3]

console.log('res1: ', decompressRLElist(nums1))
console.log('res2: ', decompressRLElist(nums2))
