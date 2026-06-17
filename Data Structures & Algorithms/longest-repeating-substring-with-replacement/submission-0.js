class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let [i, j, maxWinSize, maxFreq, freq] = [0,0,0,0,{}];
        while(j < s.length) {
            let ch = s[j];
            let ws = j - i + 1;
            freq[ch] = (freq[ch] || 0) + 1;
            maxFreq = Math.max(maxFreq, freq[ch]);
            if((ws - maxFreq) > k){
                let chLast = s[i];
                freq[chLast]--;
                i++;
            }
            maxWinSize = Math.max(maxWinSize, (j - i +1));
            j++;
        }
        return maxWinSize;
    }
}
