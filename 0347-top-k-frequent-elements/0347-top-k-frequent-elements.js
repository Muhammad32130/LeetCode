/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const m = new Map();
    nums.forEach(num => {
        let val = m.get(num) || 0
        m.set(num, ++val)
    })
    return [...m].sort((a,b) => b[1] - a[1]).slice(0, k).map(e => e[0]);
};