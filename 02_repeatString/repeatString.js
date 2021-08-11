const repeatString = function(string, times) {
    // Recursion
    if (times < 0) {
        return '';
    }
    if (times === 1) {
        return string;
    }
    else {
        return string + repeatString(string, times - 1);
    }
};

module.exports = repeatString;
