class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let [left, maxLen] = [0,0];
        for(let right = 0; right < s.length; right++) {
            const ch = s[right];
            if(map.has(ch)) {
                left = Math.max(left, map.get(ch) + 1);
            }
            map.set(ch, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}
