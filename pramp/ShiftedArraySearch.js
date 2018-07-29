/**
QUESTION: Shifted Array Search
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. 
If numisn’t in shiftArr, return -1. 
Assume that the offset doesn’t equal to 0 (i.e. assume the array is shifted at least once) or to arr.length - 1 (i.e. assume the shifted array isn’t fully reversed).
Explain your solution and analyze its time and space complexities.

Example:
input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left
output: 3 # since it’s the index of 2 in arr

Constraints:
* [time limit] 5000ms
* [input] array.integer arr
* [input] integer num
* [output] integer
*/

// shiftedArrSearch
function shiftedArrSearch(shiftArr, num) {
    let pivot = findPivotPoint(shiftArr);
    if (pivot == 0 || num < shiftArr[0]) {
        return binarySearch(shiftArr, pivot, shiftArr.length - 1, num);
    }
    return binarySearch(shiftArr, 0, pivot - 1, num);
}

function findPivotPoint(arr) {
    let begin = 0,
        end = arr.length - 1,
        mid;
    while (begin <= end) {
        mid = Math.floor((end + begin) / 2);
        if (end == 0 || arr[mid - 1] > arr[mid]) {
            return mid;
        } else if (arr[0] < arr[mid]) {
            begin = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}

function binarySearch(arr, begin, end, num) {
    let mid;
    while (begin <= end) {
        mid = Math.floor((end + begin) / 2);
        if (arr[mid] < num) {
            begin = mid + 1;
        } else if (arr[mid] == num) {
            return mid;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

var shiftArr = [9, 12, 17, 2, 4, 5],
    num = 2;
console.log(shiftedArrSearch(shiftArr, num));
