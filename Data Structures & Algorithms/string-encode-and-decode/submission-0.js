class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        for(let str of strs) {
            encodedStr += str.length + "#" + str;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let  i = 0;
        while (i < str.length) {
            let j = i;
            let len = '';
            while(str[j] !== '#') {
                len += str[j];
                j++;
            }
            const wordLen = Number(len);
            const word = str.slice(j + 1, j + 1 + wordLen)
            res.push(word);
            i = j + 1 + wordLen;
        }
        return res;
    }
}
