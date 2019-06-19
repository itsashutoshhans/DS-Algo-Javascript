// https://leetcode.com/problems/last-stone-weight/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // sort the array
    stones = stones.sort((a,b)=>a-b);
    
    while(stones.length > 1) {
        // take the difference of the 2 heaviest stones
        const diff = stones.pop() - stones.pop();
        
        // insert the difference back into the array at appropriate index
        if(diff > 0) {
            let idx = 0;
            while(diff > stones[idx]) {
                idx++;
            }
            stones.splice(idx, 0, diff);
        }
    }
    
    return stones.length ? stones[0] : 0;
}

stones([2,7,4,1,8,1]) // 1