const palindromes = function (str) {
    const valid = `abcdefghijklmnopqrstuvwxyz1234567890`;

    const clean = str
        .toLowerCase()
        .split(``)
        .filter((char) => valid.includes(char))
        .join(``);
    
    const reversed = clean
        .split(``)
        .reverse(``)
        .join(``);
    
        return clean === str;
        
        
};

// Do not edit below this line
module.exports = palindromes;
