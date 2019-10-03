// https://leetcode.com/problems/height-checker/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // create a new array which has indexes till 100
    let heightArray = new Array(100).fill(0);
    
    
    // increment the index in height Array for the respective heights
    for(let h in heights) {
        heightArray[heights[h]]++;
    }
    
    let count = 0;
    let currentHeight = 0;
    for(let i in heights) {
        
        while(heightArray[currentHeight] === 0) {
            currentHeight++;
        }
        
        if(currentHeight != heights[i]) {
            count++;
        }
        heightArray[currentHeight]--;
    }
    
    return count;
    
};