/**
 * https://leetcode.com/problems/reverse-integer/description/
 * Given a 32-bit signed integer, reverse digits of an integer.
 */
/**
 * @param {number} x
 * @return {number}
 */

// tu version 80ms
var reverse_V1 = function(x) {
    x = x.toString();
    if (isNaN(x[0])) {
        x = parseInt(
            x[0] +
                x
                    .split("")
                    .slice(1)
                    .reverse()
                    .join("")
        );
    } else {
        x = +x
            .split("")
            .reverse()
            .join("");
    }
    if (x > 2147483648 || x < -2147483648) {
        return 0;
    } else {
        return x;
    }
};

// no1 version  68ms
var reverse = function(x) {
    let result = 0;

    while (x != 0) {
        let tail = x % 10;
        result = result * 10 + tail;
        x = (x - tail) / 10;
    }
    if (result >= 2147483647 || result <= -2147483647) {
        return 0;
    }
    return result;
};

// var input = 123; //Output: 321
// var input = -123; //Output: -321
var input = 120;   //Output: 21

console.log("reverse_V1: " + reverse_V1(input));
console.log("reverse: " + reverse(input));
