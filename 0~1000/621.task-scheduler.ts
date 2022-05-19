/**
 * https://leetcode.com/problems/task-scheduler/
 * Medium 621. Task Scheduler
 */

/** 
 * e.g.
 * Input: tasks = ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "D", "E", "E"], n = 2
 * Output: 14
 * 
 * steps:
 * 1. iterate over tasks to get the num of each element
 *    especially we can get the largest num, and the count of largest num 
 *    res: arr = (3A, 3B, 3C, 3D, 2E), max = 3, maxNum = 4
 * 
 * 2. and then calculate how many parts we can divide from the largest num
 *    res: parts = max - 1 = 3 - 1 = 2
 * 
 * 3. calculate the length of each parts
 *    res: partsLen = n - (maxNum - 1) = 2 - (4 - 1) = -1
 *    -1 < 0 means we got enough tasks to fill in each part
 * 
 * 4. get the empty slots waiting to fill by remaining tasks
 *    res: parts * partsLen = 2 * (-1) = -2
 * 
 * 5. get the remaining tasks (expect the most frequent tasks)
 *    res: remainingTasks = tasks.length - max * maxNum = 14 - 3 * 4 = 2
 * 
 * 6. get the idles
 *    res: max(0, emptySlots - remainingTasks)
 * 
 * 7. res = idles + tasks length
 */

// TC: O(n), SC: O(1)
function leastInterval(tasks: string[], n: number): number {
    // use array or map? array
    const arr = new Array(26).fill(0)
    const codeA = 'A'.charCodeAt(0)
    let max = 0    // the most frequent task num
    let maxNum = 0 // how many most frequent tasks
    // iterate throught tasks
    for (let i = 0; i < tasks.length; i++) {
        const codeIdx = tasks[i].charCodeAt(0) - codeA
        arr[codeIdx]++
        if (max < arr[codeIdx]) {
            max = arr[codeIdx]
            maxNum = 1
        } else if (max == arr[codeIdx]) {
            maxNum++
        }
    }

    /**
     * max: 3 (3A, 3B, 3C, 3D)
     * maxNum: 4
     */
    const parts = max - 1 // we have 2 parts
    const partsLen = n - (maxNum - 1) // the length of each part (-1<0 means got enough tasks to fill in)
    const emptySlots = parts * partsLen // we have 2 * -1 = -2 slots (don't have empty slots)
    const remainingTasks = tasks.length - max * maxNum // have 14 - 3 * 4 = 2 remainning tasks
    const idles = Math.max(0, emptySlots - remainingTasks) // max(0, -4) = 0

    return tasks.length + idles
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "D", "E", "E"], 2), 14);
});

Deno.test("assertEquals Test", () => {
    assertEquals(leastInterval(["A", "A", "A", "B", "B", "B"], 2), 8);
});

Deno.test("assertEquals Test", () => {
    assertEquals(leastInterval(["A", "A", "A", "B", "B", "B", "C", "D"], 2), 8);
});

Deno.test("assertEquals Test", () => {
    assertEquals(leastInterval(["A", "A", "A", "B", "B", "B"], 0), 6);
});

Deno.test("assertEquals Test", () => {
    assertEquals(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2), 16);
});
