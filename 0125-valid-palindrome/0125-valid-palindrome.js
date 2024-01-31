/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Optimal 
    //the time complexity is O(n), and the memory complexity is O(n).
    s = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    let r = s.length - 1 
    for (let i = 0; i < Math.floor(s.length / 2); i++ ){
        if(s[i]!== s[r]){
            return false
        }
        else{
            r--
        }
    }
        return true
    
    
    
};

//  O(n)
    // return (s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("").reverse().join("")===s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())