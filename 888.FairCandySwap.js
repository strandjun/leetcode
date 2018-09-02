/**
 * https://leetcode.com/problems/fair-candy-swap/description/
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
/**
 * stragegy step:
 * step1. find sumA&sumB, then find distance, know which one should be less or more.
 * step2. scan the array, find the pair of nums.
 */

const reducer = (accumulator, currentVal) => accumulator + currentVal;

var fairCandySwap = function(A, B) {
    let sumA = A.reduce(reducer),
        sumB = B.reduce(reducer);
    let differ = (sumA - sumB)/2;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < B.length; j++){
            if(A[i] - B[j] === differ){
                return [A[i], B[j]];
            }
        }
    }
};

var A = [1, 1],    B = [2, 2]; // Output: [1,2]
var A = [1, 2],    B = [2, 3]; // Output: [1,2]
var A = [2],       B = [1, 3]; // Output: [2,3]
var A = [1, 2, 5], B = [2, 4]; // Output: [5,4]

console.log(fairCandySwap(A, B));
