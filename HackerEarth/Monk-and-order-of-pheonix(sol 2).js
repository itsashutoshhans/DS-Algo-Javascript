// Sample code to perform I/O:
 
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 
function main(input) {
    input = input.split("\n");
    
    // get the number of stacks
    const n = Number(input[0]);
    
    // get the fighters matrix
    let fighters  = [];
    for (let i = 1; i <  n + 1; i++) {
         fighters[i-1] = [];
        let currentRow = (input[i].split(" ").map(Number)); //convert the strings input to number
        for(let j = 1; j < currentRow.length; j++) {
            fighters[i-1].push(currentRow[j]);
        }
    }
    
    let numOfQueries = input[n+1];
    let startIndex = n + 2; // queries start index
    
    // find the current minimum of the first row
    let minOfFirstRow;
    findCurrentMin();
    
    
    while(numOfQueries--) {
        let currentQuery  = input[startIndex].split(" ")
        const v = currentQuery[0];
 
        // v = 1, voldemort will push h into kth stack
        if(v === '1') {
            const k = Number(currentQuery[1]);
            const h = Number(currentQuery[2]);
            
            fighters[k-1].push(h);
            if (k - 1 === 0) { // check if it is first row then update the min
                minOfFirstRow  = h < minOfFirstRow ? h : minOfFirstRow;                
            }
        }
        
        
        // v = 0, voldemort will pop from kth stack
        if(v === '0') {
            const k = Number(currentQuery[1]);
            let poppedHeight = fighters[k-1].pop();
            if(k-1 === 0) {
               if (poppedHeight === minOfFirstRow) findCurrentMin();
            }
        }
        
        if(v === '2') {
            // check whether there exists an increasing sequence of elements in the stacks
            let current = minOfFirstRow
            //console.log(firstRowStack);
            let isIncreasing = true;
           
           
           for (let i = 1; i < fighters.length; i++) {
               let ans = nextMin(fighters[i], current);
               
               if(ans == -1) {
                   isIncreasing = false;
                   break; 
               }
               prevMin = fighters[i][ans];
           }
           
         
            // prints the answer
            isIncreasing = isIncreasing ? 'YES' : 'NO';
            console.log(isIncreasing);
        }
        startIndex++;
        
    }
    
    
    function findCurrentMin() {
        minOfFirstRow = Infinity;
       
        for(let i = 0; i < fighters[0].length; i++) {
        if(minOfFirstRow > fighters[0][i]) {
            minOfFirstRow = fighters[0][i]
            }
        }
    }
    
    function nextMin(arr, minimumHeightTillNow) {
        let lowestIndex = 0, highestIndex = arr.length-1;
        let result = -1;
        while (lowestIndex <= highestIndex) {
            let middleIndexOfRow = Math.floor((lowestIndex + highestIndex)/2);
            if (arr[middleIndexOfRow] > minimumHeightTillNow) {
                result = middleIndexOfRow;
                highestIndex = middleIndexOfRow - 1;
            } else {
                lowestIndex = middleIndexOfRow + 1;
            }
        }
        return result;
    }
}
 
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
