class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for(let str of strs) {
            const len = str.length;
            encoded += len + '#' + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = []
        let i = 0; 
        while(i < str.length) {
            let j = i;
            let len = '';
            while(str[j] != '#') {
                len += str[j];
                j++;
            }
            const wordLen = Number(len);
            const word = str.slice(j+1, j + 1 + wordLen);
            decoded.push(word);
            i = j + 1 + wordLen;
        }
        return decoded;
    }
}
