class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = {};

        for(let i = 0; i < nums.length; i++) {
            let elm = nums[i];
            if(freq[elm]) {
                return true
            }
            freq[elm] = 1
        }
        return false;
    }
}
