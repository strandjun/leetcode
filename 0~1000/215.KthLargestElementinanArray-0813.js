/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * step:
 * 1、quicksort
 *  1) recursive
 *  2) partition
 * 2、return num kth
 */
var partition = function(arr, left, right) {
    var pivotVal = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivotVal) {
            left++;
        }
        while (arr[right] > pivotVal) {
            right--;
        }
        if (left <= right) {
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;
};
var quickSort = function(arr, start, end) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = partition(arr, start, end);
    if (start < pivot - 1) {
        quickSort(arr, start, pivot - 1);
    }
    if (pivot < end) {
        quickSort(arr, pivot, end);
    }
    return arr;
};

var findKthLargest = function(nums, k) {
    let len = nums.length;
    // console.log(nums);
    quickSort(nums, 0, nums.length - 1);
    // console.log(nums);
    return nums[len - k];
};

var nums = [3, 2, 1, 5, 6, 4],
    k = 2; // Output: 5
// var nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
//     k = 4; // Output: 4
console.log(findKthLargest(nums, k));
