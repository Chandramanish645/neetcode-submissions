class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let [i, j] = [0, s.length - 1];
        while(i < j) {
            let lChar = s[i];
            let rChar = s[j];
            if(/[^a-zA-Z0-9]/.test(lChar)) {
                i++;
            }else if (/[^a-zA-Z0-9]/.test(rChar)){
                j--;
            }else if(lChar.toLowerCase() === rChar.toLowerCase()){
                i++;
                j--;
            }else {
                return false;
            }
        }
        return true;
    }
}
