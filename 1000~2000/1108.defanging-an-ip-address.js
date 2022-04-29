/**
 * https://leetcode.com/problems/defanging-an-ip-address/
 * easy
 * 
 * Desc:
    Given a valid (IPv4) IP address, return a defanged version of that IP address.
    A defanged IP address replaces every period "." with "[.]".
 */

/**
 * Example:
    Example 1:
    Input: address = "1.1.1.1"
    Output: "1[.]1[.]1[.]1"

    Example 2:
    Input: address = "255.100.50.0"
    Output: "255[.]100[.]50[.]0"
 */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // return address.replace(/\./g, '[.]')
    let newStr = ''
    for(let i = 0; i < address.length; i++) {
        newStr += address[i] === '.' ? '[.]' : address[i]
    }
    return newStr
};


const address1 = "1.1.1.1"
const address2 = "255.100.50.0"

console.log('res: ', defangIPaddr(address1))
console.log('res: ', defangIPaddr(address2))
