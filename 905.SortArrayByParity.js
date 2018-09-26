/**
 * https://leetcode.com/problems/sort-array-by-parity/description/
 * @param {number[]} A
 * @return {number[]}
 */

/**
 * stragegy steps:
 * 1. scan the array
 * 2. if even elements, then push, else push other arr
 * 3. combine two arr
 */

var sortArrayByParity_NO1 = function (A) {
    let evenArr = [],
        oddArr = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
            evenArr.push(A[i]);
        } else {
            oddArr.push(A[i]);
        }
    }
    return evenArr.concat(oddArr);
};

// clever function
var sortArrayByParity = function (A) {
    for(let i = 0, j = A.length - 1; i < j;){
        while( i < j && A[i] % 2 == 0){ i++; }
        while( i < j && A[j] % 2 == 1){ j--; }
        if( i < j ){
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }
    return A;
};

var A = [3, 1, 2, 4];  //Output: [2,4,3,1]
console.log(sortArrayByParity(A));