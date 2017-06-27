/**
 * https://leetcode.com/problems/hamming-distance/#/description
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function(x, y) {
    var test = (parseInt(x) ^ parseInt(y)).toString(2);
    var re = /[1]/g;
    if(re.test(test)){
        return test.match(re).length;
    };
    return 0;
};


var x = 1, y = 4;
console.log(hammingDistance(x,y));