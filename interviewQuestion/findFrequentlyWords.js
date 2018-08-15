/**
 * @param {string} literatureText
 * @param {array} wordsToExclude
 * @return {array}
 */

/**
 * step1. string => arr
 * step2. scan arr, mark every words in obj/map
 * step3. find frequently words
 */
var findFrequentlyWords = (text, exclude) => {
    let arr = text.split(" "),
        wordMap = new Map(),
        excludeMap = new Map(),
        count = 0,
        freqMap = [];

    // turn into map, for quick hash find
    exclude.forEach(element => {
        excludeMap.set(element, 1);
    });

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (excludeMap.has(arr[i])) {
            continue;
        }
        if (wordMap.has(temp)) {
            let tempVal = wordMap.get(temp);
            tempVal++;
            wordMap.set(temp, tempVal);
            if (tempVal > count) {
                count = tempVal;
                freqMap = [];
                freqMap.push(temp);
            } else if (tempVal == count) {
                freqMap.push(temp);
            }
        } else {
            wordMap.set(temp, 1);
        }
    }
    return freqMap;
};

var literatureText =
        "jack and jill went to the market to buy bread and cheese cheese is jack favorite food",
    wordsToExclude = ["and", "he", "the", "to", "is"];

console.log(findFrequentlyWords(literatureText, wordsToExclude));
