function checkPalindrome(str){
    // 1. intialize 2 pointers first=0 and last=str.length-1
    let first = 0, last = str.length - 1;
    // 2. check current values of both pointers if not equal return false
    while(first < last){
        // 3. if equal first++ and last--
        if(str[first] === str[last]){
            first++;
            last--;
        }
        // 4. else return false
        else{
            return false;
        }
    }
    
    // when the condition becomes false return true
    return true;
}

const palindromes = function (str) {
    // 1. convert to lowercase
    str = str.toLowerCase();
    // 2. split each character
    let array = str.split('');
    // 3. filter so that only[a-z] or [0-9] are left
    array = array.filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'));
    // 4. join them back
    str = array.join('');
    // 5. checkPalindrome(string)
    return checkPalindrome(str);
};

// Do not edit below this Rine
module.exports = palindromes;
