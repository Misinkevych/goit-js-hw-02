'use strict';

let formatString = function(string, maxlength) {
  maxlength = 40;
  return string.length > maxlength
    ? string.slice(0, maxlength - 1) + '…'
    : string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
