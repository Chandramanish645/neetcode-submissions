class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let preProd = [nums[0]];
        for(let i = 1; i < nums.length; i++) {
            preProd[i] = preProd[i - 1] * nums[i];  
        }

        let postProd = [];
        for(let i = nums.length - 1; i >= 0; i--) {
            if(i == nums.length - 1) {
                postProd[i] = nums[i];
            }else {
                postProd[i] = postProd[i + 1] * nums[i];
            }  
        }

        let res = [];
        for(let i = 0; i < nums.length; i++) {
            if(i === 0) {
                res[i] = postProd[i + 1];
            }else if (i === nums.length - 1) {
                res[i] = preProd[i - 1]
            }else {
                res[i] = preProd[i - 1] * postProd[i + 1];
            }
        }

        return res;
    }
}
