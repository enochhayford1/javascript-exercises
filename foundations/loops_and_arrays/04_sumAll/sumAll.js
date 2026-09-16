const sumAll = function(a,b) {
    if ((isNaN(a) || a < 0 || !Number.isInteger(a)) || (isNaN(b) || b < 0 || !Number.isInteger(b))) {
        return `ERROR`;
    }

    let smaller = 0;
    let larger = 0;

    if (a < b) {
        smaller = a;
        larger = b;
    } else if (b < a) {
        smaller = b;
        larger = a;
    }


    let sum = 0;
    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
