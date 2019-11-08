const api = 'https://restcountries.eu/rest/v2/name';

export default {
  fetch(guery) {
    const name = `/${guery}`;
    return fetch(api + name).then(res => res.json());
  },
};
