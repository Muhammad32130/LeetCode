/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0 
    let r = height.length - 1 
    let Maxarea = 0

    while (l <  r){ 
        let area = (r - l) * Math.min(height[l], height[r])
        Maxarea = Math.max(area, Maxarea)
        if (height[l] < height[r]) l++
        else r--
    }
    return Maxarea

};