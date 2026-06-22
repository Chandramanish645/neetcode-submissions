class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let [left, right] = [0, s.length -1];
        while(left < right) {
            while(left < right && !this.isAlphanumeric(s[left])){
                left++;
            }
            while(left <right && !this.isAlphanumeric(s[right])) {
                right--;
            }
            if(s[left].toLowerCase() != s[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    isAlphanumeric(char){
        const code = char.charCodeAt(0);
        if(
            (code >= 48 && code <= 57) ||  // 0-9
            (code >= 65 && code <= 90) ||  // A-Z
            (code >= 97 && code <= 122) 
        ){
            return true;
        }
        return false;
    }
}
