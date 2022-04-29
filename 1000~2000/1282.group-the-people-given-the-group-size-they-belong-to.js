/**
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 * Medium
 * 
 * Desc:
    There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.

    You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

    Return a list of groups such that each person i is in a group of size groupSizes[i].

    Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.
 */

/**
 * Example:
    Example 1:
    Input: groupSizes = [3,3,3,3,3,1,3]
    Output: [[5],[0,1,2],[3,4,6]]
    Explanation: 
    The first group is [5]. The size is 1, and groupSizes[5] = 1.
    The second group is [0,1,2]. The size is 3, and groupSizes[0] = groupSizes[1] = groupSizes[2] = 3.
    The third group is [3,4,6]. The size is 3, and groupSizes[3] = groupSizes[4] = groupSizes[6] = 3.
    Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

    Example 2:
    Input: groupSizes = [2,1,3,3,3,2]
    Output: [[1],[0,5],[2,3,4]]
 */

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let res = [];
  let map = new Map();

  for (let i = 0; i < groupSizes.length; i++) {
    const len = groupSizes[i];
    if (map.has(len)) {
      const group = map.get(len);
      group.push(i);
      if (group.length === len) {
        res.push(group);
        map.delete(len);
      } else {
        map.set(len, group);
      }
    } else {
      if (len === 1) {
        res.push([i]);
      } else {
        map.set(len, [i]);
      }
    }
  }
  return res;
};

// the first version!
var groupThePeople_0 = function (groupSizes) {
  let res = [];
  let map = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    if (map.has(groupSizes[i])) {
      const arr = map.get(groupSizes[i]);
      map.set(groupSizes[i], [...arr, i]);
    } else {
      map.set(groupSizes[i], [i]);
    }
  }

  for ([key, val] of map.entries()) {
    if (val.length === key) {
      res.push(val);
    } else {
      while (val.length >= key) {
        res.push(val.splice(0, key));
      }
    }
  }
  return res;
};

const groupSizes = [3, 3, 3, 3, 3, 1, 3]; // Output: [[5], [0, 1, 2], [3, 4, 6]];
const groupSizes1 = [2, 1, 3, 3, 3, 2]; // Output: [[1], [0, 5], [2, 3, 4]];

console.log('res0: ', groupThePeople(groupSizes));
console.log('res1: ', groupThePeople(groupSizes1));
