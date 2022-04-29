/**
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * Easy - 1832. Check if the Sentence Is Pangram
 */


/**
 * Question:
 *   1. What is Pangram?
 *   2. Is Pangram case sensitive? 
 *   3. What is the size of input?
 *   4. Can the input be empty or null, or some other type of data?
 *   5. Do we have runtime or space constraints?
 */

/**
 * Strategy:
 *   1. use hashmap, then count size
 */

// O(N)  O(1)
function checkIfPangram(sentence: string): boolean {
    if (sentence.length < 26) {
        return false
    }
    const pangram = new Set<string>()
    for (let i = 0; i < sentence.length; i++) {
        if ((typeof sentence[i] === "string") && !pangram.has(sentence[i].toLowerCase())) {
            pangram.add(sentence[i].toLowerCase())
            if (pangram.size === 26) {
                return true
            }
        }
    }
    return false
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(checkIfPangram("leetcode"), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(checkIfPangram("abbcdefghijklmnopqrstuvwxyz"), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(checkIfPangram("jwtucoucmdfwxxqnxzkaxoglszmfrcvjoiunqqausaxxaaijyqdqgvdnqcaihwilqkpivenpnekioyqujrdrovqrlxovcucjqzjsxmllfgndfprctxvxwlzjtciqxgsxfwhmuzqvlksyuztoetyjugmswfjtawwaqmwyxmvo"), false);
});
