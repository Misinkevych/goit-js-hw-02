'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// const ingredients = guerySelector('#ingredients');
const ingredient = document.createElement('li');
const ingredien = document.createElement('li');
const ingredie = document.createElement('li');
const ingredi = document.createElement('li');
const ingred = document.createElement('li');
const ingre = document.createElement('li');

ingredient.textContent = 'Картошка';
ingredien.textContent = 'Грибы';
ingredie.textContent = 'Чеснок';
ingredi.textContent = 'Помидоры';
ingred.textContent = 'Зелень';
ingre.textContent = 'Приправы';

// ingr.insertAdjacentHTML('beforeend', ingredient);
console.log(ingredient); // <li></li>
console.log(ingredien); // <li></li>
console.log(ingredie); // <li></li>
console.log(ingredi); // <li></li>
console.log(ingred); // <li></li>
console.log(ingre); // <li></li>

// ingredient.textContent = 'Картошка';
// console.log(ingredient); // <li>Картошка</li>
