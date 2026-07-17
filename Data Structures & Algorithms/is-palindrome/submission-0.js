class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        const regex = /[A-z0-9]/;
        while (i < j) { 
            if (!regex.test(s[i])) {
                i++;
                continue;
            } else if (!regex.test(s[j])) {
                j--;
                continue;
            } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
