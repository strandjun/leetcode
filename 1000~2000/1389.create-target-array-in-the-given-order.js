/**
 * https://leetcode.com/problems/create-target-array-in-the-given-order/
 * easy
 * 
 * Desc:
    Given two arrays of integers nums and index. Your task is to create target array under the following rules:
    Initially target array is empty.
    From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
    Repeat the previous step until there are no elements to read in nums and index.
    Return the target array.

    It is guaranteed that the insertion operations will be valid.
 */

/**
 * Example:
    Example 1:
    Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
    Output: [0,4,1,3,2]
    Explanation:
    nums       index     target
    0            0        [0]
    1            1        [0,1]
    2            2        [0,1,2]
    3            2        [0,1,3,2]
    4            1        [0,4,1,3,2]
    
    Example 2:
    Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
    Output: [0,1,2,3,4]
    Explanation:
    nums       index     target
    1            0        [1]
    2            1        [1,2]
    3            2        [1,2,3]
    4            3        [1,2,3,4]
    0            0        [0,1,2,3,4]
    
    Example 3:
    Input: nums = [1], index = [0]
    Output: [1]
 */

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, idxArr) {
    // let res = []
    // for(let i = 0; i < nums.length; i++) {
    //     res.splice(idxArr[i], 0, nums[i])
    // }
    // return res

    /**
     * a method without using splice
     * first: reshuffling of idxArr
     * then:  assign val directly to the res array in order
     */ 
    let res = [], maxLen = -1
    for(let i = 0; i < idxArr.length; i++){
        if(idxArr[i] <= maxLen){
            for(let j = 0; j < i; j++){
                if(idxArr[i] <= idxArr[j]) {
                    idxArr[j]++
                }
                maxLen = Math.max(maxLen, idxArr[j])
            }            
        }
        maxLen = Math.max(maxLen, idxArr[i])
    }
    for(const i in nums) {
        res[idxArr[i]] = nums[i]
    }
    return res
};

const nums = [0,1,2,3,4], index = [0,1,2,2,1] // Output: [0,4,1,3,2]
const nums1 = [1,2,3,4,0], index1 = [0,1,2,3,0] // Output: [0,1,2,3,4]
const nums2 = [1], index2 = [0] // Output: [1]

console.log('res0: ', createTargetArray(nums, index))
// console.log('res1: ', createTargetArray(nums1, index1))
// console.log('res2: ', createTargetArray(nums2, index2))
