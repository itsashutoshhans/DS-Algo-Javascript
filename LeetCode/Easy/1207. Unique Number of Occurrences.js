// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hashMap = {};
    // store the number of occurences in a hashMap
    
    for (let element of arr) {
        hashMap[element] = ++hashMap[element] || 1;
    }
    
    let elementSet = new Set();
    
    for (let key in hashMap) {
        if(elementSet.has(hashMap[key])) return false;
        elementSet.add(hashMap[key]);
    }
    
    return true;
};