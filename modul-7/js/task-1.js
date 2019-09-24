'use strict';
// const categoriesUl = Array.from(
//   document.querySelectorAll('ul#categories>li.item'),
// );
// console.log(`В списке ${categoriesUl.length} категории`);
// const categoriesList = Array.from(
//   document.querySelectorAll('ul#categories li.item ul '),
// );
// const categoriesArr = [];
// categoriesList.forEach(element => {
//   categoriesArr.push(
//     `Категория: ${
//       //   document.querySelectorAll('ul#categories>li.item>h2')
//       document.querySelectorAll('h2').textContent
//     } Количество элементов: ${element.children.length}`,
//   );
// });
// console.log(categoriesArr);

const categoriesUl = Array.from(
  document.querySelectorAll('ul#categories>li.item'),
);
console.log(`В списке ${categoriesUl.length} категории`);
const categoriesList = Array.from(
  document.querySelectorAll('ul#categories li.item ul '),
);

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, element => {
  const title = element.querySelector('h2').textContent;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});

//  Вам нужно по коллекции categoriesUl пробежать циклом,
//   внутри которого вы будете выводить его h2, считать количество и
//   выводить его в той же строке.
//  Лучше разбить на две функции для читабельности.
