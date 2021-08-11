/* 
* fahrenheit to celsius - subtract 32 and multiply by 5/9
* celsius to fahrenheit - multiply by 9/5 and add 32
* multiply by 10 and divide by 10 to get 1 dp
*/

const ftoc = function(farenheit) {
  return Math.round(((farenheit - 32) * (5/9) * 10) / 10);
}

const ctof = function(celsius) {
  return Math.round((((celsius * 9/5) + 32) * 10) / 10);
}

module.exports = {
  ftoc,
  ctof
};
