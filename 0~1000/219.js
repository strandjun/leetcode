/**
 * https://leetcode.com/problems/contains-duplicate-ii/#/description
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    var obj = {};
    for(var i=0,len=nums.length;i<len;i++){
        if((obj[nums[i]] != "undefined") && (Math.abs(i-obj[nums[i]]) <= k)){
            return true;
        }
        obj[nums[i]] = i;
    }    
    return false;
};

var nums = [-1,-1],
    k = 1;
console.log(containsNearbyDuplicate(nums,k));