class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLen = 0;
        for(let n of nums) {
            if(!set.has(n - 1)) {
                let curr = n;
                let len = 1;
                while(set.has(curr + 1)) {
                    curr++;
                    len++;
                }
                maxLen = Math.max(len, maxLen);
            }
        }
        return maxLen;
    }
}
