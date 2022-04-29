/**
 * https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
 * Medium    
 */

function numberOfBeams(bank: string[]): number {
    let firstSecurityNum = 0
    let res = 0

    for (let i = 0; i < bank.length; i++) {
        // get 1's amount
        let curAmount = 0
        for (let j = 0; j < bank[i].length; j++) {
            curAmount += bank[i][j] === '1' ? 1 : 0
        }
        if (curAmount === 0) {
            continue
        }

        // console.log('i, +bank[i], 1amount: ', i, bank[i], curAmount)
        if (firstSecurityNum === 0) {
            firstSecurityNum = curAmount
        } else {
            // do the calc
            res += firstSecurityNum * curAmount
            firstSecurityNum = curAmount
        }
    }

    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

const bank = ["011001", "000000", "010100", "001000"]
const output = 8
Deno.test("assertEquals Test", () => {
    assertEquals(numberOfBeams(bank), output);
});

const bank1 = ["111111111111111111111111110000000", "100101000110000001001100000101110", "000000001000100010001000100010001", "000000000010000000000100000000001", "101011000011110000111111001101101", "000000001000001000001000001000001", "100000000001000000000010000000000", "100000100000100000100000100000000", "000000000000001011000100000000000", "000000000000000000000010000010010", "000001001001001001001001001001001", "100010001000100010001000100000000", "111011111111111111111111011001100", "000000001000100010001000100010001", "000010101010101010101010101010101", "100000001000100000100100000100010", "000000001000100010001000100010001", "000000100010001101010110100100110", "100010001000100010001000100000000", "100001000010000100001000010000000", "101100010000001111000000100011000", "100001000010000100001000010000000", "000000001000001000001000001000001", "000011111111111111111111111111111", "100101111001011111111111110111000", "000100000000000010001000100000100"]
const output1 = 2667
Deno.test("assertEquals Test", () => {
    assertEquals(numberOfBeams(bank1), output1);
});
