/**
Question: Sentence Reverse
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.
*/

/** Example:
input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
*/

/**
Constraints:

[time limit] 5000ms
[input] array.character arr
0 ≤ arr.length ≤ 100
[output] array.character
*/


/**
Hints: Decrypt Message
The most useful way to tackle these kind of problems is using reverse engineering. And for that your peer needs many examples - more than provided.
One way to create examples is by generating them manually. A much more efficient way would be implementing an encryption function (which is straightforward), and using it for testing. Encourage your peer to do so.
The simplest solution to this question is to decrypt one letter at a time, each time using the letters already decrypted. If your peer is stuck, advise them to try finding the relations between the previous decrypted letter and the current encrypted one.
If your peer needs further assistance, try guiding them towards the equation: enc[n] = dec[n] + secondStep[n-1] + 26m, which is fully explained in the solution.
Your peer should be given full score only if they succeed building and testing an efficient decryption function, without any hints. The function should be of O(N) complexity both in terms of time and space.
Make sure your peer gives an accurate complexity analysis, and whether the function they implemented is more efficient when used once on one long word, or many times when used on rather short words.
*/ 

/**
Answer:
Decrypt Message
First of all, notice that the first letter is very easy to decrypt:

Convert the first letter back to its ASCII value.
Subtract 1 from it.
Move the value to be in the range of a-z ASCII values (97-122), by adding 26.
Convert the result back to a character.
The decryption of the rest of the letters is done by almost the same algorithm - given the decrypted previous letter prev, and its value after the second step of encryption - denoted secondStepPrev:

Convert the current letter back to its ASCII value.
Subtract secondStepPrev from it.
Move the value to be in the range of a-z ASCII value (97-122), by adding multiples of 26.
Convert the result back to a character. Store its ASCII value in prev, and add its value to secondStepPrev (for the decryption of the next letter).
Let’s examine the algorithm using the following notation:

dec[n] - the n’th letter before encryption.
enc[n] - the n’th letter after encryption.
secondStep[n] - the n’th letter immediately after step 2 in the encryption.
The encryption algorithm gives the following relation for some integer m (which represents the number of times we need to add 26 to get to an ascii value):

enc[n] = dec[n] + secondStep[n-1] + 26m
By isolating dec[n], we get:

dec[n] = enc[n] - secondStep[n-1] - 26m
Though the value of m isn’t initially known, since the value of the decrypted letter must be in the ASCII range of a-z, the decrypted letter is easily found adding 26’s to enc[n] - secondStep[n] until it is in the right range.

*/

/**
Pseudocode:
function decrypt(word):
    secondStep = 1
    decryption = ""

    for i from 0 to word.length - 1:
        newLetterAscii = asciiValue(word[i])
        newLetterAscii = newLetterAscii - secondStep

        while (newLetterAscii < asciiValue('a')):
            newLetterAscii += 26
         
        decryption = decryption + asciiToChar(newLetterAscii)
        secondStep += newLetterAscii

    return decryption
*/

/**
Note: The following functions were used but not defined, since the implementation is dependant of the programming language:

asciiValue(chr) - returns the ASCII value of a given char.
asciiToChar(chr) - returns the char of a given ASCII value. When your peer programs their solution, it is preferable they use one of the built in functions in the language of their choice, rather than implementing them themselves.
Time Complexity: the function’s asymptotic time complexity is O(N), where N is the length of the input string. the loop that iterates through the letters in the input is performed N times. In the loop, almost every step is done in O(1), except for the loop that is supposed to move the decrypted letter back to the range of a-z. Theoretically, the secondStep may grow linearly with the size of the input. There are two ways to deal with this:

Instead of secondStep itself, we may only keep its remainder after being divided by 26 (since we add/subtract multiples of 26 anyway, the equation dec[N] = enc[N] - (secondStep[N-1] % 26)- 26M still holds, only for a different M). This way all values in every iteration are kept in a constant range.
Note that since in practice this function is used only for words in the English language, the input is bounded and we therefore may ignore the growth of the secondStep anyway.
Space Complexity: the space usage is also O(N) since the output is the same size of the input, and we only keep the output and the second step in storage.
*/