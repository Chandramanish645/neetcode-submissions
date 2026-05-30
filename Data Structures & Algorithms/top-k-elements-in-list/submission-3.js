class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let elemFreq = {};
        let indexFreq = Array(nums.length).fill([]);
        for(let i = 0; i < nums.length; i++) {
            elemFreq[nums[i]] = (elemFreq[nums[i]] || 0) + 1;
        }
        for(const [key, value] of Object.entries(elemFreq)) {
            indexFreq[value] = [...(indexFreq[value]||[]), key];
        }
        let res = [];
        for(let i = indexFreq.length - 1; i > 0; i--) {
            if(res.length === k) {
                return res;
            }
            if(indexFreq[i].length > 0) {
                res.push(...indexFreq[i]);
            }
        }
        return res;
    }
}
