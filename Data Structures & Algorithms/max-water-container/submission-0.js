class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let [i, j] = [0, heights.length-1];
        let maxArea = 0;
        while(i < j) {
            let width = j - i;
            let height = Math.min(heights[i], heights[j]);
            maxArea = Math.max((width * height), maxArea);
            if(heights[i] < heights[j]){
                i++;
            }else if(heights[i] > heights[j]){
                j--;
            }else {
                i++;
            }
        }
        return maxArea
    }
}
