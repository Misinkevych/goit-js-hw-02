/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
'use strict';
// const card = document.querySelector('.movie');
// const img = document.querySelector('.movie__image').cloneNode(true);
// const body = document.querySelector('.movie__body');
// const title = document.querySelector('.movie__title').cloneNode(true);
// const description = document
//   .querySelector('.movie__description')
//   .cloneNode(true);
// const date = document.querySelector('.movie__date');
// const rating = document.querySelector('.movie__rating');

// // const clone = title.cloneNode(true);
// card.appendChild(img);
// card.appendChild(title);
// card.appendChild(description);
function createMovieCard() {
  const move = document.createElement('div');
  move.classList.add('movie');
  const img = document.createElement('img');
  img.href = '#';
  img.alt = 'movie image';
  img.classList.add('movie__image');

  const div = document.createElement('div');
  div.classList.add('movie__body');

  const heading = document.createElement('h2');
  heading.textContent = 'The Godfather';

  const abzac = document.createElement('p');
  abzac.classList.add('movie__description');
  abzac.textContent = `Italian-American Corleone crime  organized crime family
  patriarch, Vito Corleone barely survives an attempt on his life, his
  youngest son, Michael steps in to take care of the would-be killers,
  launching a campaign of bloody revenge.`;

  const abza = document.createElement('p');
  abza.classList.add('movie__date');
  abza.textContent = `Released: 1972-03-14`;
  const abz = document.createElement('p');
  abz.classList.add('movie__rating');
  abz.textContent = `Rating: 8.6`;

  const nav = document.querySelector('.movie__body');
  nav.appendChild(heading);
  nav.appendChild(abzac);
  nav.appendChild(abza);
  nav.appendChild(abz);
  const muv = document.querySelector('.movie');
  muv.appendChild(img);
  muv.appendChild(nav);
  return muv;
}
