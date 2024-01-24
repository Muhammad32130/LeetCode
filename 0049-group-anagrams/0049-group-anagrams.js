/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    

    const word  = new Map();
    for (const str of strs ){
        const sortedWord = str.split('').sort().join('');
        if(word.has(sortedWord)){
        word.get(sortedWord).push(str);
        }else{
            word.set(sortedWord,[str]);
        }
    }
    const resultArray = Array.from(word.values());
   return resultArray
}
    
    







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