/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0
    let r = height.length - 1
    let leftMax = 0 
    let rightMax = 0
    let rainwater = 0
    while (l < r) {
     if (height[l] < height[r]) {
            if (height[l] >= leftMax) {
                leftMax = height[l];
            } else {
                rainwater += leftMax - height[l];
            }
            l++
    }
    else {
        if(height[r] >= rightMax){
            rightMax = height[r]
        } else {
            rainwater += rightMax - height[r]
        }
        r--
    }



    }
    return rainwater
    }
