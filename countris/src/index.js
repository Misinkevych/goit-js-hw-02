import './styles.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import '../node_modules/pnotify/src/PNotifyBrightTheme.css';
import fetch from './js/fetch.js';

import debounce from '../node_modules/lodash';
import countri from './template/countryTemplayte.hbs';

const templateList = document.querySelector('#template');
const input = document.querySelector('#search');

const country = document.querySelector('#container');

input.addEventListener('input', _.debounce(handler, 500));

function handler(e) {
  e.preventDefault();
  PNotify.removeAll();
  clean();
  const guery = e.target.value;
  if (guery.length >= 1) {
    fetch.fetch(guery).then(data => {
      if (data.length === 1) {
        const markup = countri(data[0]);
        country.innerHTML = markup;
      } else if (data.length <= 10) {
        sugestions(data);
      } else {
        PNotify.error(
          'Too many matches found. Please enter a more specific query',
        );
      }
    });
  }
}

function sugestions(data) {
  data.forEach(creatContri);

  function creatContri(country) {
    const li = document.createElement('li');
    templateList.appendChild(li);
    li.innerHTML = country.name;
  }
}

function clean() {
  templateList.innerHTML = '';
  country.innerHTML = '';
}
