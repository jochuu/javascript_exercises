const palindromes = function (string) {
    let reversedString = string.split("").reverse().join("");
    return (string === reversedString);
};

module.exports = palindromes;
