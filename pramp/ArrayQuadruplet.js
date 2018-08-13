/**
Question: Array Quadruplet
Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.


Example:
input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
output: [0, 4, 7, 9] 

# The ordered quadruplet of (7, 4, 0, 9) whose sum is 20. 
# Notice that there are two other quadruplets whose sum is 20:
# (7, 9, 1, 3) and (2, 4, 9, 5), 
# but again you’re asked to return the just one quadruplet (in an ascending order)


Constraints:
[time limit] 5000ms
[input] array.integer arr
1 ≤ arr.length ≤ 100
[input] integer s
[output] array.integer

*/


/**
 * partition
 * @param  {array} arr
 * @param  {number} left
 * @param  {number} right
 * @return {number}
 */

function partition(arr, left, right) {
    // console.log(`unsorted arr: ${arr}`);
    // console.log(`pivot: ${Math.floor((left + right) / 2)}, tempPivot: ${arr[Math.floor((left + right) / 2)]}`);
    let tempPivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < tempPivot) {
            left++;
        }
        while (arr[right] > tempPivot) {
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
    // console.log(`left: ${left}, sort arr: ${arr}`);
    return left;  
}

/**
 * quickSort
 * @param  {array} arr
 * @param  {number} start
 * @param  {number} end
 * @return {array}
 */
function quickSort(arr, start, end) {
    let pivot = partition(arr, start, end);
    // console.log(`start: ${start}, end: ${end}, pivot: ${pivot}`);
    if (start < pivot - 1) {
        quickSort(arr, start, pivot - 1);
    }
    if (pivot < end) {
        quickSort(arr, pivot, end);
    }
    return arr;
}

/**
 * findArrayQuadruplet
 * @param  {array} arr
 * @param  {number} s
 * @return {array}
 */
function findArrayQuadruplet(arr, s) {
    // your code goes here
    // 1. sorted arr
    // 2. find first group

    let len = arr.length;
    if (len < 4) {
        return [];
    }
    console.log(`old arr: ${arr}`);
    // arr = arr.sort();
    quickSort(arr, 0, len - 1);
    console.log(`sort arr: ${arr}`);

    for (let i = 0; i <= len - 4; i++) {
        for (let j = i + 1; j <= len - 3; j++) {
            let remainSum = s - arr[i] - arr[j];
            let small = j + 1,
                big = len - 1;

            // console.log(`i: ${i}`);
            while (small < big) {
                if (arr[small] + arr[big] < remainSum) {
                    small++;
                } else if (arr[small] + arr[big] > remainSum) {
                    big--;
                } else {
                    return [arr[i], arr[j], arr[small], arr[big]];
                }
            }
        }
    }
    return [];
}

// case 1
var arr = [2, 7, 4, 0, 9, 5, 1, 3],
    s = 20;
// sorted arr = [0, 1, 2, 3, 4, 5, 7, 9];
// output: [0, 4, 7, 9]

// case 2
var arr = [4, 4, 4, 4], s = 16;
// output: [4, 4, 4, 4]

// case 3
var arr = [1, 2, 3, 4, 5, 9, 19, 12, 12, 19], s = 40;
// output: [4, 5, 12, 19];

console.log(findArrayQuadruplet(arr, s));
