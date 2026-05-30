class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for(let e of nums) {
            freq[e] = (freq[e] + 1) || 1;
        }
        const freqArr = Object
            .values(freq)
            .sort((a,b) => b -a)
            .slice(0, k);

        return Object.keys(freq).filter(key => {
            if(freqArr.includes(freq[key])){
                return key;
            }
        })
    }
}
