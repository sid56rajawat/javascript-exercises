const repeatString = function(string,number) {
    if(number < 0) return "ERROR";
    let repeatedString = "";
    while(number--) repeatedString += string;
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
