const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    let previousValue = 0;
    let currentValue;
    let nextValue = 1;
    for (let i = 1; i <= index; i++) {
        currentValue = nextValue;
        nextValue = nextValue + previousValue;
        previousValue = currentValue;

        // cV = 1; nV = 1 + 0; pV = 1;  index = 1
        // cV = 1; nV = 1 + 1; pV = 1;  index = 2
        // cV = 2; nV = 1 + 2; pV = 2;  index = 3
        // cV = 3; nV = 2 + 3; pV = 3;  index = 4
        // cV = 5; nV = 3 + 5; pV = 5;  index = 5
        // cV = 8; nV = 5 + 8; pV = 8;  index = 6
    }
    return currentValue;
};

module.exports = fibonacci;
