class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(let str of strs) {
            const count = new Array(26).fill(0);
            for(let s of str) {
                count[s.charCodeAt(0) - 97]++;
            };
            const key = count.join();
            if(res[key] !== undefined) {
                res[key].push(str);
            }else {
                res[key] = [str];
            }
        }
        return Object.keys(res).map(key => res[key])
    }
}
