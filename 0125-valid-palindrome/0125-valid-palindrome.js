/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    return (s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("").reverse().join("")===s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())
};