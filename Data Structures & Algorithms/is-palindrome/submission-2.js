class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        while (i < j) { 
            while (i < j && !this.isAlphanumeric(s.charCodeAt(i))) i++;
            while (i < j && !this.isAlphanumeric(s.charCodeAt(j))) j--;
            if (this.toLower(s.charCodeAt(i)) !== this.toLower(s.charCodeAt(j)))
                return false;
            i++;
            j--;
        }
        return true;
    }

    isAlphanumeric(code) {
        return (
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
        );
    }

    toLower(code) {
        if (code >= 65 && code <= 90) return code + 32;
        return code;
    }
}
