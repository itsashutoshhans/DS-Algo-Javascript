function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if(short[j] !== long[j+i])break;
            if( j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("levelled  up", "led"); //1 

//Pseudocode

/* Loop over the longer string
 * Loop over the shorter string
 * if characters don't match break from the inner loop
 * if characters do match, keep going
 * if the inner loop is complete, increment the count of matches
 * return the count */
