class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length;
        let set = new Set();
        nums.sort((a, b) => a - b);
        for(let i = 0 ; i < n; i++) {
            for(let j = i + 1; j < n; j++) {
                for(let k = j + 1; k < n; k++) {
                    if(nums[i] + nums[j] + nums[k] === 0) {
                        set.add(JSON.stringify([nums[i], nums[j], nums[k]]))
                    }
                }
            }
        }
        return Array.from(set).map(item => JSON.parse(item));
    }
}
