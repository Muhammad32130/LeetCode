/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    const closeToOpen = new Map([
          [")", "("],
    ["]", "["],
    ["}", "{"],
    ])

    for(const char of s){
        if(closeToOpen.has(char)){
            if(stack.length && stack[stack.length - 1] === closeToOpen.get(char)){
                stack.pop()
            }
            else return false
        }
        else {
            stack.push(char)
        }
    
    }
 return stack.length === 0;
};