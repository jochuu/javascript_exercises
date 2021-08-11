const sumAll = function(min, max) {
    let sum = 0;

    if (min < 0 || max < 0) { //Negative number check
        return "ERROR";
    } 

    if (!Number.isInteger(min) || !Number.isInteger(max)) { //Integer check
        return "ERROR";
    } 

    if(max < min) { //Swap min with max and max with min
        [min, max] = [max, min]
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

module.exports = sumAll;
