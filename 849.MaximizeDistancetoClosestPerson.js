/**
 * https://leetcode.com/problems/maximize-distance-to-closest-person/description/
 * @param {number[]} seats
 * @return {number}
 */

// tu 508ms version (꒦_꒦)
var maxDistToClosest = function(seats) {
    let leftPerson = null,
        rightPerson = null,
        minDis = null;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] == 1) {
            leftPerson = i;
            continue;
        }
        // console.log(`leftPerson: ${leftPerson}`);
        // console.log(`i: ${i}`);

        if (
            rightPerson < i ||
            rightPerson == null ||
            rightPerson == leftPerson
        ) {
            if (seats.slice(i).indexOf(1) < 0) {
                return seats.length - 1 - leftPerson > minDis
                    ? seats.length - 1 - leftPerson
                    : minDis;
            }
            rightPerson = seats.slice(i).indexOf(1) + i;
        }
        // console.log(`rightPerson: ${rightPerson}`);

        let tmpSeat;
        if (leftPerson == null) {
            tmpSeat = rightPerson - i;
        } else {
            tmpSeat =
                rightPerson - i > i - leftPerson
                    ? i - leftPerson
                    : rightPerson - i;
        }
        if (minDis == null) {
            minDis = tmpSeat;
        } else {
            minDis = tmpSeat > minDis ? tmpSeat : minDis;
        }
        // console.log(`minDis: ${minDis}`);
    }
    return minDis;
};

// 60ms worship version
const maxDistToClosest = function(seats) {
    const occupied = [];
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            occupied.push(i);
        }
    }
    let answer = occupied[0];
    for (let j = 0; j < occupied.length - 1; j++) {
        answer = Math.max(answer, (occupied[j + 1] - occupied[j]) >> 1);
    }
    answer = Math.max(answer, seats.length - occupied[occupied.length - 1] - 1);
    return answer;
};

var seats = [1, 0, 0, 0, 1, 0, 1]; // output: 2
// var seats = [1, 0, 0, 0]; // output: 3
// var seats = [0, 1]; //output: 1
// var seats = [0, 1, 1, 1, 0, 0, 1, 0, 0]; //output: 2

console.log(maxDistToClosest(seats));
