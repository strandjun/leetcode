/**
QUESTION
Smallest Substring of All Characters
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.
 */

function getShortestUniqueSubstring(arr, str) {
    let headIndex = 0,
        result = "",
        uniqueCounter = 0,
        countMap = new Map();

    // initialize countMap
    for (let i = 0; i < arr.length; i++) {
        countMap.set(arr[i], 0);
    }

    // scan str
    for (let tailIndex = 0; tailIndex < str.length; tailIndex++) {
        // handle the new tail
        let tailChar = str.charAt(tailIndex);

        // skip all the characters not in arr
        if (countMap.has(tailChar) == false) {
            continue;
        }

        let tailCount = countMap.get(tailChar);
        if (tailCount == 0) {
            uniqueCounter++;
        }
        countMap.set(tailChar, ++tailCount);

        // push head forward
        while (uniqueCounter == arr.length) {
            // console.log(`tailIndex: ${tailIndex}`);
            let tempLength = tailIndex - headIndex + 1;
            if (tempLength == arr.length) {
                // return a substring of str from headIndex to tailIndex (inclusive)
                console.log(`smallest: ${str.substring(headIndex, tailIndex + 1)}`);
                return str.substring(headIndex, tailIndex + 1);
            }

            if (result == "" || tempLength < result.length) {
                // return a substring of str from headIndex to tailIndex (inclusive)
                result = str.substring(headIndex, tailIndex + 1);
                console.log(`result: ${result}`);
            }

            let headChar = str.charAt(headIndex);

            if (countMap.has(headChar)) {
                let headCount = countMap.get(headChar) - 1;
                if (headCount == 0) {
                    uniqueCounter--;
                }
                countMap.set(headChar, headCount);
            }
            headIndex++;
        }
    }
    return result;
}

var arr = ["x", "y", "z"],
    str = "xyyzyzyx"; // output: "zyx"
console.log(getShortestUniqueSubstring(arr, str));
