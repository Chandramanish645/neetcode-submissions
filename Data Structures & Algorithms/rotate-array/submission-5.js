class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    
    rotate(nums, k) {
        k = k % nums.length;
        function swap(l, r, nums) {
            while(l < r) {
                let temp = nums[l];
                nums[l] = nums[r];
                nums[r] = temp;
                l++;
                r--;
            }
        
        }

        let [l, r] = [0, nums.length - 1];
        swap(l, r, nums);

        [l, r] = [0, k - 1];
        swap(l, r, nums);

        [l, r] = [k, nums.length - 1]
        swap(l, r, nums);

        //return nums;
    }
}