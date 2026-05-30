class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // As max size of count array is 26 so space complexity is O(1)
    // Time complexity = O(n) + O(m)
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const count = new Array(26).fill(0); 
        for(let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }

        for(let c of count) {
            if(c !== 0) return false;
        }

        return true;
    }
}
