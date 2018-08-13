/**
 * quicksort step:
 *   1) recursive
 *   2) partition
 *
 * wiki:
 *   https://www.wikiwand.com/en/Quicksort
 * animation:
 *   https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html
 *
 * leetcode problems:
 *   215. Kth Largest Element in an Array
 *   https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 */

/**
 * partition
 * @param  {array} arr
 * @param  {number} left
 * @param  {number} right
 * @return {number}
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

/**
 * quickSort
 * @param  {array} arr
 * @param  {number} start
 * @param  {number} end
 * @return {array}
 */
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

let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(quickSort(arr, 0, arr.length - 1).join(','));
