class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // Brute Force approach -> time complexity - O(nlogn) + O(n^3) ~ O(n^3)
    // threeSum(nums) {
    //     let n = nums.length;
    //     let set = new Set();
    //     nums.sort((a, b) => a - b);
    //     for(let i = 0 ; i < n; i++) {
    //         for(let j = i + 1; j < n; j++) {
    //             for(let k = j + 1; k < n; k++) {
    //                 if(nums[i] + nums[j] + nums[k] === 0) {
    //                     set.add(JSON.stringify([nums[i], nums[j], nums[k]]))
    //                 }
    //             }
    //         }
    //     }
    //     return Array.from(set).map(item => JSON.parse(item));
    // }
    // Two pointers approach --> time complexity - O(nlogn) + O(n^2) ~ O(n^2)
    threeSum(nums){
        let res = new Set();
        nums.sort((a, b) => a - b);
        let n = nums.length;
        for(let i = 0; i < n - 2; i++) {
            let [l, r] = [i + 1, n - 1];
            while( l < r ) {
                if(nums[l] + nums[r] + nums[i] > 0) {
                    r--;
                }else if(nums[l] + nums[r] + nums[i] < 0) {
                    l++;
                }else {
                    res.add(JSON.stringify([nums[i], nums[l], nums[r]]));
                    l++;
                    r--;
                }
            }
        }
        return Array.from(res).map(item => JSON.parse(item));
    }
}
