class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = new Array(26).fill(0);
        for(let char of s) {
            count[char.charCodeAt(0) - 97]++;
        }

        for(let char of t) {
            count[char.charCodeAt(0) - 97]--;
        };

        for(let i of count) {
            if(i!==0) {
                return false;
            }
        }
        return true;
    }
}
