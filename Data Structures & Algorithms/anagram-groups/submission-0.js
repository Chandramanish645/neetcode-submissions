class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for(const word of strs) {
            let freq = new Array(26).fill(0);
            for(const char of word) {
                let idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
                freq[idx]++;
            }
            const key = freq.join('#');
            if(!res[key]){
                res[key] = [];
            }
            res[key].push(word);
        }
        return Object.values(res);
    }
}
