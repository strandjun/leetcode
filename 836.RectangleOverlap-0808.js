/**
 * https://leetcode.com/problems/rectangle-overlap/description/
 *
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    /**
     * r1 left  of r2: r1[2] <= r2[0]
     * r1 right of r2: r1[0] >= r2[2]
     * r1 below of r2: r1[3] <= r2[1]
     * r1 top   of r2: r1[1] >= r2[3]
     */
    if (
        rec1[2] <= rec2[0] ||
        rec1[0] >= rec2[2] ||
        rec1[3] <= rec2[1] ||
        rec1[1] >= rec2[3]
    ) {
        return false;
    }
    return true;
};

var rec1 = [0, 0, 2, 2],
    rec2 = [1, 1, 3, 3]; // Output: true
// var rec1 = [0, 0, 1, 1],
//     rec2 = [1, 0, 2, 1]; // Output: false

console.log(isRectangleOverlap(rec1, rec2));
