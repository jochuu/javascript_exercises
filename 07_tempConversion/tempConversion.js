/* 
* ftoc(32) // fahrenheit to celsius, should return 0
* ctof(0) // celsius to fahrenheit, should return 32
*/

const ftoc = function(farenheit) {
  return farenheit-32;
};

const ctof = function(celsius) {
  return celsius+32;
};

module.exports = {
  ftoc,
  ctof
};
