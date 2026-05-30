class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for(let str of strs) {
            let count = new Array(26).fill(0);
            for(let s of str) {
                count[s.charCodeAt(0) - 97]++;
            }
            const key = count.join();
            res[key] = [...(res[key] || []), str];
        }
        return Object.values(res);
    }
}
