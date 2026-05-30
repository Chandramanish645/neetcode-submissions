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
        const freqArr = Object.values(freq)
        //console.log("freqArr: ", freqArr);
        const sortedFreqArr = freqArr.sort((a,b) => b -a);
        //console.log("sortedFreqArr : ", sortedFreqArr)
        const topk = sortedFreqArr.slice(0, k);
        //console.log("topk : ", topk);
        return Object.keys(freq).filter(key => {
            if(topk.includes(freq[key])){
                return key;
            }
        })
    }
}
