/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
       const map = new Map;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            var temp = map.get(nums[i]);
            temp += 1;
            map.set(nums[i], temp);
        } else {
            map.set(nums[i], 1)
        }
    }
    const sortedKeys = Array.from(map.keys()).sort((a,b) => map.get(b) - map.get(a));
    return sortedKeys.slice(0, k);
};