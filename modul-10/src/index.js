import Theme from './js/utils/constans';
import dishes from './assets/menu';
import dishTemplate from './templates/DishTemplate.hbs';
import refs from './js/refs/refs'

import './styles.css';

/**
 * Creating and render a menu list from the json array
 * @param dishes
 * @returns {*}
 */
const createDishItem = (dishes) => {
  const noteItem = dishes.map(note => dishTemplate(note)).join('');

  return noteItem;
};
const markup = createDishItem(dishes);
refs.list.insertAdjacentHTML('beforeend', markup);


/**
 * Return by the key 'theme' name theme from the storage
 * @returns {string}
 */
const getThemeFromStorage = () => localStorage.getItem('theme');


/**
 * Set some key and value in the local storage
 * @param key
 * @param value
 */
const setStorage = (key, value) => {
  localStorage.setItem(key, value);
};


/**
 * Basic function for light theme
 */
const setLightTheme = () => {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  refs.toggle.checked = false;
};


/**
 * Basic function for dark theme
 */
const setDarkTheme = () => {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  refs.toggle.checked = true;
};


/**
 * Installs a theme from the storage
 */
const setTheme = () => {
  const currentTheme = getThemeFromStorage();

  if(currentTheme === Theme.LIGHT) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
};


/**
 * Saved theme to local storage
 * based on checkbox state
 * @param target
 */
const onChangeThemeHandler = ({ target }) => {
  if(target.checked) {
    setStorage('theme', Theme.DARK);
    setTheme();
  } else {
    setStorage('theme', Theme.LIGHT);
    setTheme();
  }
};


/**
 * Set theme for the storage when page is loaded first time
 */
const onLoadHandler = () => {
  if(getThemeFromStorage() === null) {
    setStorage('theme', Theme.LIGHT)
  }

  setTheme();
};

onLoadHandler();

refs.toggle.addEventListener('change', onChangeThemeHandler);
