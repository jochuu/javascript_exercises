const palindromes = function (string) {
    let s = string.replace(/[^A-Za-z]/g, "").toLowerCase();
    let reversedString = s.split("").reverse().join("");
    return (s === reversedString);
};

module.exports = palindromes;
