'use strict';

const checkForSpam = function(str, string) {
  for (const item of str) {
    if (item === string) {
      return true;
    }
  }

  return false;
};

console.log(checkForSpam('Latest technology news'.split(' ')));
console.log(checkForSpam('JavaScript weekly newsletter'.split(' ')));
console.log(checkForSpam('Get best sale offers now!'.split(' '), 'sale'));
console.log(
  checkForSpam('[SPAM] How to earn fast money?'.split(' '), '[SPAM]'),
);
