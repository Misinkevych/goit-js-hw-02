'use strict';
const fn = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i];
    array[0] = '1-Mango';
    array[1] = '2-Poly';
    array[2] = '3-Ajax';
    array[3] = '4-Lux';
    array[4] = '5-Jay';
    array[5] = '6-Kong';
    array[6] = '7-5';
    array[7] = '8-10';
    array[8] = '9-15';
    array[9] = '10-20';
    array[10] = '11-25';
    array[11] = '12-30';
    array[12] = '13-35';
    array[13] = '14-40';
    array[14] = '15-45';
    array[15] = '16-50';
    array[16] = '17-55';
  }
};

let logItems = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
logItems = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

fn(logItems);

console.log(logItems);
