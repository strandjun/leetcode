/**
 * https://leetcode.com/problems/binary-gap/description/
 * 
 * Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.
 * If there aren't two consecutive 1's, return 0.
 * 
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let binary = N.toString(2);
    let gapDistance = 0, tmp = null;
    for(let i=0; i<binary.length; i++){
        if(binary[i] == 1){
            if(tmp != null){
                gapDistance = (i - tmp) > gapDistance ? (i - tmp) : gapDistance;
            }
            tmp = i;
        }
    }
    return gapDistance;
};

// let N = 22;  //2
let N = 6;   //1
// let N = 8;   //0
console.log(binaryGap(N));

/**
 * time complexity:  O(N)
 * space complexity: O(1)
 */