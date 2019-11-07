import './styles.css';
import '../node_modules/pnotify/src/PNotifyBrightTheme.css';
import fetchCountries from './js/fetchCountries';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import debounce from '../node_modules/lodash';
import templateCountryData from './template/showCountryData.hbs';

const input = document.querySelector('#query');
const suggestionList = document.querySelector('#suggestions');
const countryInfo = document.querySelector('#info-container');

input.addEventListener('input', _.debounce(countriesHandler, 500));

function countriesHandler(e) {
  e.preventDefault();
  PNotify.removeAll();
  cleanDisplay();
  const searchQuery = e.target.value;
  if (searchQuery.length >= 1) {
    fetchCountries.fetchCountries(searchQuery).then(data => {
      if (data.length === 1) {
        const markup = templateCountryData(data[0]);
        countryInfo.innerHTML = markup;
      } else if (data.length <= 10) {
        showSuggestions(data);
      } else {
        PNotify.error(
          'Too many matches found. Please enter a more specific query',
        );
      }
    });
  }
}

function showSuggestions(data) {
  data.forEach(createSuggestionList);

  function createSuggestionList(country) {
    const li = document.createElement('li');
    suggestionList.appendChild(li);
    li.innerHTML = country.name;
  }
}

function cleanDisplay() {
  suggestionList.innerHTML = '';
  countryInfo.innerHTML = '';
}
