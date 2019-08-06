'use strict';

// const checkForSpam = function(str) {
//   const smallStr = str.toLowerCase();
//   return (smallStr.indexOf('sale') !== -1 || smallStr.indexOf('spam') !== -1) ? true : false;
// }

const checkForSpam = function(str) {
  const smallStr = str.toLowerCase();
  return smallStr.includes('sale') || smallStr.includes('spam') ? true : false;
};

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
