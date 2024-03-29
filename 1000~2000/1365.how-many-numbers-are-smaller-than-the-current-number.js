/**
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * easy
 * 
 * Desc:
    Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

    Return the answer in an array.
 */

/**
 * Example:
    Example 1:
    Input: nums = [8,1,2,2,3]
    Output: [4,0,1,1,3]
    Explanation: 
    For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
    For nums[1]=1 does not exist any smaller number than it.
    For nums[2]=2 there exist one smaller number than it (1). 
    For nums[3]=2 there exist one smaller number than it (1). 
    For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
    
    Example 2:
    Input: nums = [6,5,4,8]
    Output: [2,1,0,3]

    Example 3:
    Input: nums = [7,7,7,7]
    Output: [0,0,0,0]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // brute force for each array element
    // Runtime 96 ms, Memory 40.3 MB
    // if (!nums.length) return nums
    // let res = []
    // for (let i = 0; i < nums.length; i++) {
    //     let count = 0
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i === j) {
    //             continue
    //         }
    //         count += nums[j] < nums[i] ? 1 : 0
    //     }
    //     res.push(count)
    // }
    // return res

    // Runtime 88 ms, Memory 40.3 MB
    let newNums = [...nums].sort((a, b) => a - b)
    let resMap = new Map()
    return nums.map(num => {
        if (resMap.has(num)) {
            return resMap.get(num)
        }
        const count = newNums.indexOf(num)
        resMap.set(num, count)
        return count
    })
};

const nums1 = [8,1,2,2,3] // [4,0,1,1,3]
const nums2 = [6,5,4,8]   // [2,1,0,3]
const nums3 = [7,7,7,7]   // [0,0,0,0]

console.log('res1: ', smallerNumbersThanCurrent(nums1))
console.log('res2: ', smallerNumbersThanCurrent(nums2))
console.log('res3: ', smallerNumbersThanCurrent(nums3))
