/**
 * https://leetcode.com/problems/goal-parser-interpretation/
 * easy
 * 
 * Desc:
    You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

    Given the string command, return the Goal Parser's interpretation of command.
 */

/**
 * Example:
   Example 1:
   Input: command = "G()(al)"
   Output: "Goal"
   Explanation: The Goal Parser interprets the command as follows:
   G -> G
   () -> o
   (al) -> al
   The final concatenated result is "Goal".

   Example 2:
   Input: command = "G()()()()(al)"
   Output: "Gooooal"

   Example 3:
   Input: command = "(al)G(al)()()G"
   Output: "alGalooG"
 */

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
   let i = 0
   let res = ''
   while(i < command.length) {
      if(command[i] === 'G') {
         res += 'G'
         i++
      } else if(command[i] === '(') {
         if (command[i+1] === ")") {
            res += 'o'
            i += 2
         } else {
            res += 'al'
            i += 4
         }
      }
   }
   return res
};

const command1 = "G()(al)"        // "Goal"
const command2 = "G()()()()(al)"  // "Gooooal"
const command3 = "(al)G(al)()()G" // "alGalooG"

console.log('res1: ', interpret(command1))
console.log('res2: ', interpret(command2))
console.log('res3: ', interpret(command3))
