class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        let m = s.length;
        if(t.length > m) return "";

        let requiredCount = t.length;
        let [i , j] = [ 0, 0];
        let minWindowSize = Number.MAX_SAFE_INTEGER;
        let startI = 0;
        let map = {};

        for(let ch of t) {
            map[ch] = (map[ch] || 0) + 1;
        }

        while(j <= m) {
            const ch = s[j];
            if(map[ch] > 0) {
                requiredCount--
            }
            map[ch]--;

            while(requiredCount === 0) {
                const currWinSize = j - i + 1;

                if(minWindowSize > currWinSize) {
                    minWindowSize = currWinSize;
                    startI = i;
                }
                map[s[i]]++;
                if(map[s[i]] > 0){
                    requiredCount++;
                }
                i++;
            }
            j++;
        }
        return minWindowSize === Number.MAX_SAFE_INTEGER ? "" : s.substring(startI, startI + minWindowSize);
    }
}
