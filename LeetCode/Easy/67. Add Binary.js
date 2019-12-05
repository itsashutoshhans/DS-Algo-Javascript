// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let carry = 0;
    let lastIndexA = a.length - 1;
    let lastIndexB = b.length - 1;
    
    const getSum = (b1, b2, c) => {
        b1 = b1 ? parseInt(b1) : undefined;
        b2 = b2 ? parseInt(b2) : undefined;
        if(c === 1) {
            if( b1 && b2) {
                carry = 1
                return '1'; // sum, carry
            } else {
                if( b1 || b2) {
                    carry = 1;
                    return '0';
                }
                else {
                    carry = 0;
                    return '1';
                }
            }
        } else {
            if( b1 && b2) {
                carry = 1;
                return '0'; 
            } else {
                if( b1 || b2) {
                    carry = 0;
                    return '1';
                }
                else {
                    carry = 0;
                    return '0';
                }
            }
        }
    }
    
    
    while(lastIndexA >=0 || lastIndexB>=0) {
        result = getSum(a[lastIndexA], b[lastIndexB], carry) + result;
        lastIndexA--;
        lastIndexB--;
    }
    
    if(carry === 1) {
        result = carry + result;
    }
    
    return result;
};