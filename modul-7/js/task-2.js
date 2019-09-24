'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
function createIngredients() {
  const getIngredients = document.querySelector('ul#ingredients');
  const createLiPotato = document.createElement('li');
  createLiPotato.textContent = 'Картошка';
  const createLiMashrooms = document.createElement('li');
  createLiMashrooms.textContent = 'Грибы';
  const createLiGarlic = document.createElement('li');
  createLiGarlic.textContent = 'Чеснок';
  const createLiTomato = document.createElement('li');
  createLiTomato.textContent = 'Помидоры';
  const createLiGreenery = document.createElement('li');
  createLiGreenery.textContent = 'Зелень';
  const createLiSeasonings = document.createElement('li');
  createLiSeasonings.textContent = 'Приправы';
  getIngredients.append(
    createLiPotato,
    createLiMashrooms,
    createLiGarlic,
    createLiTomato,
    createLiGreenery,
    createLiSeasonings,
  );
  return getIngredients;
}
createIngredients();
