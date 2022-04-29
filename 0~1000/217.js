/**
 * https://leetcode.com/problems/contains-duplicate/#/description
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {},
        flag = false;
    nums.forEach(function(elem){
        if(obj[elem] == 1){
            flag = true;
            return;
        }
        obj[elem] = 1;
    });
    return flag;
};

var nums = [3,5,7,3];
console.log(containsDuplicate(nums));