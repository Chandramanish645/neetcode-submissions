class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = {};
        for(let num of nums) {
            if(freq[num]){
                return true;
            }else {
                freq[num] = 1;
            }
        }
        return false;
    }
}
