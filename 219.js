/**
 * https://leetcode.com/problems/contains-duplicate-ii/#/description
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var nums = [-1,-1],
    k = 1;
var containsNearbyDuplicate = function(nums, k) {
    var obj = {};
    for(var i=0,len=nums.length;i<len;i++){
        if((typeof obj[nums[i]] != "undefined") && (Math.abs(i-obj[nums[i]]) <= k)){
            return true;
        }
        obj[nums[i]] = i;
    }    
    return false;
};

console.log(containsNearbyDuplicate(nums,k));