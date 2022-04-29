/**
 * https://leetcode.com/problems/transpose-matrix/description/
 * 
 * Given a matrix A, return the transpose of A.
 * The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
 *  
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let newArr = [],
        tmpArr = [];
    for(let i=0; i<A[0].length; i++){
        for(let j=0; j<A.length; j++){
            tmpArr.push(A[j][i]);
        }
        newArr.push(tmpArr); 
        tmpArr = [];
    }
    return newArr;
};


// let A = [[1,2,3],[4,5,6],[7,8,9]];   //Output: [[1,4,7],[2,5,8],[3,6,9]]
let A = [[1,2,3],[4,5,6]];      //Output: [[1,4],[2,5],[3,6]]
console.log(transpose(A).join(' '));