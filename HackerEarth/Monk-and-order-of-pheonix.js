// https://www.hackerearth.com/practice/data-structures/stacks/basics-of-stacks/practice-problems/algorithm/monk-and-order-of-phoenix/
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


//--------- MAIN CODE HERE -----------

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

    let numOfQueries = Number(input[n+1]);
    let startIndex = n + 2; // queries start index
    
    let firstRowStack = []; // maintain a first row stack which contains all the next minimums if the element gets popped off by voldi
    firstRowStack.push(fighters[0][0]);


    for(let i = 1; i < fighters[0].length; i++) {
        let val = fighters[0][i];
        if(val < firstRowStack[firstRowStack.length-1]){
            firstRowStack.push(val);
        }
        else{
            firstRowStack.push(firstRowStack[firstRowStack.length-1]);
        }
    }
    
    
    while(numOfQueries--) {
        let currentQuery  = input[startIndex].split(" ")
        const v = currentQuery[0];

        // v = 1, voldemort will push h into kth stack
        if(v === '1') {
            const k = Number(currentQuery[1]) - 1;
            const h = Number(currentQuery[2]);
            
            fighters[k].push(h);
            if (k === 0) { // check if it is first row then update the min
               if(h < firstRowStack[firstRowStack.length - 1]) {
                    firstRowStack.push(h);
               } else {
                   firstRowStack.push(firstRowStack[firstRowStack.length-1]);
               }              
            }
        }
        
        
        // v = 0, voldemort will pop from kth stack
        if(v === '0') {
            const k = Number(currentQuery[1])-1;
            fighters[k].pop();
            if(k === 0) {
               firstRowStack.pop();
            }
        }
        
        if(v === '2') {
            // check whether there exists an increasing sequence of elements in the stacks
            let current = firstRowStack[firstRowStack.length-1];
            //console.log(firstRowStack);
            let isIncreasing = true;
           
           
           for (let i = 1; i < fighters.length; i++) {
               let ans = nextMin(fighters[i], current);
               
               if(ans == -1) {
                   isIncreasing = false;
                   break; 
               }
               prevMin = fighters[i][ans]; // upate the min.
           }
           
         
            // prints the answer
            isIncreasing = isIncreasing ? 'YES' : 'NO';
            console.log(isIncreasing);
        }
        startIndex++;
        
    }
    
    // Binary search to reduce the time complexity
    
    function nextMin(arr, minimumHeightInFirstRow) {
        let lowestIndex = 0, highestIndex = arr.length-1;
        let result = -1;
        while (lowestIndex <= highestIndex) {
            let middleIndexOfRow = Math.floor((lowestIndex + highestIndex)/2);
            if (arr[middleIndexOfRow] > minimumHeightInFirstRow) {
                result = middleIndexOfRow;
                highestIndex = middleIndexOfRow - 1;
            } else {
                lowestIndex = middleIndexOfRow + 1;
            }
        }
        return result;
    }
}

