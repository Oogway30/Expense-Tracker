var romanToInt = function(s) {
   let romanNumerals = {
    I: 1,
    V: 3,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
   }
   let numerals = Array.from(s)

   return numerals.reduce((sum,numeral)=>sum+romanNumerals[numeral])
};
console.log(romanToInt("III"))