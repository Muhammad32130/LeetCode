/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
 let map = {}

for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split('').sort().join('');
    
    if (!map[sortedString]) {
        map[sortedString] = [strs[i]];
    } else {
        map[sortedString].push(strs[i]);
    }
}

return Object.values(map);
    
    
    
    
};







// O(n * m * log(m)) Time
//O(n * m) Space
//     let map = {}
//     for(let i = 0; i < sorted.length; i++){
//     let sorted = strs.map((str)=>str.split('').sort().join(''))
//         if(!map[sorted[i]]){
//             map[sorted[i]]= [strs[i]]
//     }else{
//         map[sorted[i]].push(strs[i])
//     }
//     }
//     return Object.values(map)