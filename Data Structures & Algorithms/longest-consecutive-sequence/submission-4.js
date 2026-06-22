class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLen = 0;
        for(const num of set) {
            if(!set.has(num - 1)) {
                let curr = num;
                let count = 1;
                while(set.has(curr + 1)) {
                    curr++;
                    count++;
                }
                maxLen = Math.max(maxLen, count);
            }
        }
        return maxLen;
    }
}
