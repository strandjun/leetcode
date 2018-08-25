/**
QUESTION: Time Planner
Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return null.

Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

Implement an efficient solution and analyze its time and space complexities.


Examples:
input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: null # since there is no common slot whose duration is 12


Constraints:
[time limit] 5000ms
[input] array.array.integer slotsA & slotsB
1 ≤ slotsA.length ≤ 100
slotsA[i].length = 2
[input] integer
[output] array.integer

*/

/**
 * @param {Array} slotsA
 * @param {Array} slotsB
 * @param {number} dur
 * @return{Array}
 */
function meetingPlanner(slotsA, slotsB, dur) {
    // your code goes here
    let i = 0,
        j = 0;
    let min, max;

    while (i < slotsA.length && j < slotsB.length) {
        min = Math.max(slotsA[i][0], slotsB[j][0]);
        max = Math.min(slotsA[i][1], slotsB[j][1]);
        if (max - min >= dur) {
            return [min, min + dur];
        } else {
            if (max == sa[1]) {
                i++;
            } else {
                j++;
            }
        }
    }
    return [];
}

var slotsA = [[10, 50], [60, 120], [140, 210]],
    slotsB = [[0, 15], [60, 70]],
    dur = 8; // output: [60, 68]

var slotsA = [[10, 50], [60, 120], [140, 210]],
    slotsB = [[0, 15], [60, 70]],
    dur = 12; // output: []

/**/
console.log(meetingPlanner(slotsA, slotsB, dur));

/*  
analyze

case1:                 i
input:  slotsA = [[10, 14], [20,30], [60, 120], [140, 210]]
        slotsB = [[0, 15], [45, 70], [110,150]]
                      j
                        
        max (0,10)   10 
        min (15,14)  14  slotsA =>i++ j++  
        max - min >= dur
        5     < 8              
        then anserr = [45,53]
                      
        dur = 8 earliest
 output: [140, 148] earliest:[60, 68]

case2:
input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: null

returns the earliest time slot that works for both of them
*/
