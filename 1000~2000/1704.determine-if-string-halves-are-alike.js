/**
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/
 * Easy
 * 
 * Desc:
    You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

    Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

    Return true if a and b are alike. Otherwise, return false.
 */

/**
 * Example:
    Example 1:

    Input: s = "book"
    Output: true
    Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
    
    Example 2:
    Input: s = "textbook"
    Output: false
    Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
    Notice that the vowel o is counted twice.
    
    Example 3:
    Input: s = "MerryChristmas"
    Output: false
    
    Example 4:
    Input: s = "AbCdEfGh"
    Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
   let a = 0, b = 0
   const mid = s.length / 2
   const vowels = 'aeiouAEIOU'

   for (let i = 0, j = mid; i < mid; i++, j++) {
      if (vowels.includes(s[i])) a++
      if (vowels.includes(s[j])) b++
   }
   return a === b
};

// another more clever method
var halvesAreAlike_ = function(s) {
   const vowels = "aeiouAEIOU"
    let mid = s.length / 2, ans = 0

    for (let i = 0, j = mid; i < mid; i++, j++) {
      ans += vowels.includes(s.charAt(i)) - vowels.includes(s.charAt(j))
    }

    return ans === 0
};

const s = "book"            // Output: true
const s1 = "textbook"       // Output: false
const s2 = "MerryChristmas" // Output: false
const s3 = "AbCdEfGh"       // Output: true

console.log('res0: ', halvesAreAlike(s))
console.log('res1: ', halvesAreAlike(s1))
console.log('res2: ', halvesAreAlike(s2))
console.log('res2: ', halvesAreAlike(s3))
