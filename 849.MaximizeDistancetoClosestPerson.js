/**
 * https://leetcode.com/problems/maximize-distance-to-closest-person/description/
 * #20180807
 * @param {number[]} seats
 * @return {number}
 */

// tu 508ms version (꒦_꒦)
var maxDistToClosest_NO1 = function(seats) {
    let leftPerson = null,
        rightPerson = null,
        minDis = null;

    // scan seats arr
    for (let i = 0; i < seats.length; i++) {
        // if not empty value leftPerson
        if (seats[i] == 1) {
            leftPerson = i;
            continue;
        }
        // console.log(`leftPerson: ${leftPerson}`);
        // console.log(`i: ${i}`);

        // rightPerson Value
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

        // compare & calculate distance
        let tmpSeat =
            leftPerson !== null && i - leftPerson < rightPerson - i
                ? i - leftPerson
                : rightPerson - i;
        minDis = minDis !== null && minDis > tmpSeat ? minDis : tmpSeat;
        // console.log(`minDis: ${minDis}`);
    }
    return minDis;
};

// 60ms worship version | cannot get it
const maxDistToClosest_NO2 = function(seats) {
    const occupied = [];
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            occupied.push(i);
        }
    }
    let answer = occupied[0];
    for (let j = 0; j < occupied.length - 1; j++) {
        /**
         * (occupied[j + 1] - occupied[j]) >> 1
         * 按位右移1位…  confused
         */
        answer = Math.max(answer, (occupied[j + 1] - occupied[j]) >> 1);
    }
    answer = Math.max(answer, seats.length - occupied[occupied.length - 1] - 1);
    return answer;
};

/**
 * find the distance between two 1
 * Runtime: 92 ms
 */
var maxDistToClosest = function(seats) {
    let dis = 0,
        gap = new Map();
    if (seats[0] === 0) {
        gap.set("left", -1);
    }
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            if (gap.has("left") === false) {
                gap.set("left", i);
            }
            if (gap.size == 1 || gap.size == 2) {
                gap.set("right", i);
                if (gap.get("left") == -1) {
                    dis = gap.get("right") - 0;
                } else {
                    let tmp = Math.floor(
                        (gap.get("right") - gap.get("left")) / 2
                    );
                    dis = tmp > dis ? tmp : dis;
                }
                gap.set("left", i);
            }
        }
    }
    if (gap.get("left") < seats.length - 1) {
        dis =
            seats.length - 1 - gap.get("left") > dis
                ? seats.length - 1 - gap.get("left")
                : dis;
    }
    return dis;
};

var seats = [1, 0, 0, 0, 1, 0, 1]; // output: 2
// var seats = [1, 0, 0, 0]; // output: 3
// var seats = [0, 1]; //output: 1
// var seats = [0, 1, 1, 1, 0, 0, 1, 0, 0]; //output: 2

// console.log(maxDistToClosest_NO1(seats));
// console.log(maxDistToClosest_NO2(seats));
console.log(maxDistToClosest(seats));
