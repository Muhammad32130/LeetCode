/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const obj = new Set()
   for (let num of nums){
       if(obj.has(num)){
           return true
       }
       obj.add(num)
   }
   return false

};