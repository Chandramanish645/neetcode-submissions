class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        
        let sFreq = {};
        for(let i = 0; i < s.length; i++) {
            sFreq[s[i]] = (sFreq[s[i]] || 0) + 1;
        }

        let isAnagram = true;
        for(let i = 0; i < t.length; i++) {
            if(sFreq[t[i]]) {
                sFreq[t[i]] = sFreq[t[i]] - 1;
            }else {
                isAnagram = false;
                break;
            }
        }

        if(!isAnagram) return isAnagram;

        for(const property in sFreq) {
            if(sFreq[property]) {
                isAnagram = false;
                break;
            }
        }

        return isAnagram;
    }
}
