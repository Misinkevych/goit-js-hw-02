'use strict';

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

// var input = document.querySelector('input')
// // Вешаем обработчик события на инпут
// input.addEventListener('keyup', function(e) {
//   // Выбираем р
//   var p = document.querySelector('.res')
//   p.textContent = e.target.value
// })
// <input type="text" name="w">
// <p class='res'>
// <!-------- Выводим -------->
// </p>

// const input = document.querySelector('#name-input');
// input.addEventListener('keyup', function(e) {
//   const span = document.querySelector('#name-output');
//   span.textContent = e.target.value;
// });

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.addEventListener('input', handleInputChange);
function handleInputChange(event) {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    output.textContent = 'незнакомец';
  }
}
