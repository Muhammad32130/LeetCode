/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = new Map();
nums.forEach(n => count.set(n, count.get(n) + 1 || 1));

const freq = new Array(nums.length + 1).fill(null).map(() => []);

for (const [n, c] of count) {
    freq[c].push(n);
}

const res = [];
for (let i = freq.length - 1; i >= 0; i--) {
    for (const n of freq[i]) {
        res.push(n);
        if (res.length === k) {
            return res;
        }
    }
}
};