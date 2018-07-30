/**
Question: Decrypt Message
An infamous gang of cyber criminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking, has recently become a target for the FBI. After intercepting some of their messages, which looked like complete nonsense, the agency learned that they indeed encrypt their messages, and studied their method of encryption.

Their messages consist of lowercase latin letters only, and every word is encrypted separately as follows:

Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.

For instance, to encrypt the word “crime”

Decrypted message:	c	r	i	m	e
Step 1:	99	114	105	109	101
Step 2:	100	214	319	428	529
Step 3:	100	110	111	116	113
Encrypted message:	d	n	o	t	q
The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that receives a string that consists of small latin letters only, and returns the decrypted word.

Explain your solution and analyze its time and space complexities.

Examples:

input:  word = "dnotq"
output: "crime"

input:  word = "flgxswdliefy"
output: "encyclopedia"
Since the function should be used on messages with many words, make sure the function is as efficient as possible in both time and space. Explain the correctness of your function, and analyze its asymptotic runtime and space complexity.

Note: Most programing languages have built-in methods of converting letters to ASCII values and vica versa. You may search the internet for the appropriate method.

Constraints:

[time limit] 5000ms

[input] string word

The ASCII value of every char is in the range of lowercase letters a-z.
[output] string
*/

/**
 * ASCII码相关：
 * 大写字母A-Z对应的ASCII码值是65-90
 * 小写字母a-z对应的ASCII码值是97-122
 *
 * "a".charCodeAt();  // 97
 * String.fromCharCode(97);  // a
 */

/**
 * 解密 decrypt process
 * Decrypted message: c    r   i   m   e
 * Step 1:	          99  114 105 109 101
 * Step 2:	         100  214 319 428 529
 * Step 3:	         100  110 111 116 113
 * Encrypted message: d	   n   o   t   q
 * my version
 * @param {*} word
 */
function decrypt_NO1(word) {
    // your code goes here
    let newW = [],
        tempArr = [];
    for (let i = 0; i < word.length; i++) {
        var temp = word[i].charCodeAt();
        if (i == 0) {
            tempArr.push(temp);
            temp--;
        } else {
            let last = tempArr[tempArr.length - 1];
            while (temp - last > 122 || temp - last < 97) {
                temp = temp + 26;
            }
            tempArr.push(temp);
            // console.log(tempArr);
            temp = temp - last;
        }

        temp = String.fromCharCode(temp);
        newW.push(temp);
    }
    return newW.join("");
}

// standard version
function decrypt_NO2(word) {
    let secondStep = 1,
        decryption = "",
        newLetterAscii = null;
    for (let i = 0; i < word.length; i++) {
        // console.log(`***** output i: ${i} *****`);
        // console.log(`newLetterAscii1: ${newLetterAscii}, word[i]: ${word[i].charCodeAt()}`);
        newLetterAscii = word[i].charCodeAt();
        newLetterAscii = newLetterAscii - secondStep;
        // console.log(`newLetterAscii2: ${newLetterAscii}`);

        while (newLetterAscii < "a".charCodeAt()) {
            newLetterAscii += 26;
        }
        // console.log(`newLetterAscii3: ${newLetterAscii}`);
        decryption = decryption + String.fromCharCode(newLetterAscii);
        // console.log(`secondStep1: ${secondStep}, decryption: ${decryption}`);
        secondStep += newLetterAscii;
        // console.log(`secondStep2: ${secondStep}`);
    }
    return decryption;
}

/**
 * 加密 encrypt process
 * Decrypted message: c    r   i   m   e
 * Step 1:	          99  114 105 109 101
 * Step 2:	         100  214 319 428 529
 * Step 3:	         100  110 111 116 113
 * Encrypted message: d	   n   o   t   q
 * @param {*} word
 */
function encrypt(word) {
    let newW = [];
    for (let i = 0; i < word.length; i++) {
        let temp = word[i].charCodeAt();
        if (i == 0) {
            temp++;
        } else {
            temp = temp + newW[newW.length - 1].charCodeAt();
        }
        //console.log(i);
        //console.log(`temp1: ${temp}`);
        while (temp > 122) {
            temp = temp - 26;
        }
        //console.log(`temp2: ${temp}`);
        temp = String.fromCharCode(temp);

        newW.push(temp);
    }
    return newW.join("");
}

let word = "dnotq"; //output: "crime"
// let word = "flgxswdliefy";  //output: "encyclopedia"

// console.log(encrypt('crime'));
// console.log(decrypt_NO1(word));
console.log(decrypt_NO2(word));
