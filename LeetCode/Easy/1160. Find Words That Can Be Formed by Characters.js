// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const makeHash = (word) => {
        let hash = {};
        for(let i =0; i < word.length; i++) {
            hash[word[i]] ? hash[word[i]]++ : hash[word[i]] = 1;
        }
        return hash;
    }
    
    const isGoodString = (word, map) => {
        for(let i = 0; i < word.length; i++) {
            if(!map[word[i]] || map[word[i]] === 0) {
                return false;
            }
            map[word[i]]--;
        }
        return true;
    }
    
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
        // make hash map for the word
        let charsHash = makeHash(chars);
        
        if(isGoodString(words[i], charsHash)) {
            count+= words[i].length;
        }
        
    }
    return count;
};