'use strict';
// const refs = {
//   btnSub: document.querySelector("[data-action='sub']"),
//   btnAdd: document.querySelector("[data-action='add']"),
//   span: document.querySelector('.value'),
//   wrap: document.querySelector('.btn-wrap'),
// };

// let count = 0;
const wrap_button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter '),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};
wrap_button.sub.addEventListener('click', increment);
wrap_button.add.addEventListener('click', decrement);

// ================================
// const refs = {
//   btnSub: document.querySelector("[data-action='sub']"),
//   btnAdd: document.querySelector("[data-action='add']"),
//   span: document.querySelector('.value'),
//   wrap: document.querySelector('.btn-wrap'),
// };

// let count = 0;

// // first variant with two event handler

// const onAddHandler = () => {
//   count += 1;
//   refs.span.textContent = count;
// };

// const onSubHandler = () => {
//   count -= 1;
//   refs.span.textContent = count;
// };

// refs.btnAdd.addEventListener('click', onAddHandler);
// refs.btnSub.addEventListener('click', onSubHandler);

// =======================================

// const refs = {
//   btnSub: document.querySelector("[data-action='sub']"),
//   btnAdd: document.querySelector("[data-action='add']"),
//   span: document.querySelector('.value'),
//   wrap: document.querySelector('.btn-wrap'),
// };

// const onClickHandler = ({ target }) => {
//   switch (target.dataset.action) {
//     case 'sub':
//       count -= 1;
//       refs.span.textContent = count;
//       break;
//     case 'add':
//       count += 1;
//       refs.span.textContent = count;
//       break;
//     default:
//       refs.span.textContent = 0;
//   }
// };

// refs.wrap.addEventListener('click', onClickHandler);
