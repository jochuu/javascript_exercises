const findTheOldest = function(array) {
    return array.reduce((a, b) => {

        if (!a.yearOfDeath) {a.yearOfDeath = new Date().getFullYear();}
        if (!b.yearOfDeath) {b.yearOfDeath = new Date().getFullYear();}
        
        let oldestAge = a.yearOfDeath - a.yearOfBirth;
        let currentAge = b.yearOfDeath - b.yearOfBirth;
        
        if (oldestAge < currentAge) {
            return b;
        } else {
            return a;
        }
    })
  };

module.exports = findTheOldest;
