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
    return Array.from(m.keys()).sort((a,b)=>m.get(b) - m.get(a)).slice(0, k)
};