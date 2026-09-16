const reverseString = function(str) {
    let chars = [];
    for (let char of str) {
        chars.push(char);
    }
    const reversed = chars.toReversed();
    return reversed.join(``);
};

// Do not edit below this line
module.exports = reverseString;
