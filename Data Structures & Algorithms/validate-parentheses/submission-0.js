class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const charMap = {
            '}': '{',
            ']': '[',
            ')': '('
        };
        let stack = [];
        for(let i = 0; i < s.length; i++) {
            let elm = s[i];
            if(charMap[elm] ) {
                const lastElm = stack.pop();
                if(charMap[elm] !== lastElm) {
                    return false;
                }
            }else {
                stack.push(elm);
            }
            
        }
        return stack.length === 0;
        }
}
