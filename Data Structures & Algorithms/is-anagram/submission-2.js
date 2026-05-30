class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s = s.toLocaleLowerCase();
        t = t.toLocaleLowerCase();

        if(s.length !== t.length) return false;

        let sFreq = {};
        for(let i = 0; i < s.length; i++) {
            sFreq[s[i]] = (sFreq[s[i]] || 0) + 1;
        }

        for(let i = 0; i < t.length; i++) {
            if(!sFreq[t[i]]) {
               return false;
            }
            sFreq[t[i]] = sFreq[t[i]] - 1;
        }


        for(const property in sFreq) {
            if(sFreq[property]) {
                return false;
            }
        }

        return true;
    }
}
