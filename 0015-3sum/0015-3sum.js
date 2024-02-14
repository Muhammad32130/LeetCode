/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b ) => a - b)
    const result = []
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] === nums[i - 1]){
            continue
        }
        let l = i + 1 
        let r = nums.length - 1 
        while(l < r){
        let sum = nums[l] + nums[i] + nums[r]
        if(sum < 0 ){
            l++
        }
        if (sum > 0 ){
            r--
        }
        if(sum === 0 ){
            result.push([nums[l] , nums[r], nums[i]])
            l++
            while(nums[l] === nums[l - 1] && l < r){
                l++
            }
        } 
        }
    }
    return result


    };