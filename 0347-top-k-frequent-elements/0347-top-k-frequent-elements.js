/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const m = new Map();
    for (let i = 0; i < nums.length; i++){
            if(m.has(nums[i])){
                let count = 1 
                m.set(nums[i],m.get(nums[i]) + 1)
            }
            else {
                m.set(nums[i], 1)
            }
    }
    return [...m].sort((a,b) => b[1] - a[1]).slice(0, k).map(e => e[0]);
};