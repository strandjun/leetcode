/**
 * https://leetcode.com/problems/contains-duplicate-iii/#/description
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 * 
 * nums[i]-nums[j] <= t
 * i - j <= k
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length;
    if(len < 2 || t < 0 || k < 0){
        return false;
    }
    for(var i=0;i<len;i++){
        for(var j=i+1; (j-i)<=k && j<len; j++){
            if(Math.abs(nums[i]-nums[j])<=t){
                return true;
            }
        }
        
    }
    return false;
};

var nums = [3,6,0,4],
    k = 2,
    t = 2;
console.log(containsNearbyAlmostDuplicate(nums,k,t));