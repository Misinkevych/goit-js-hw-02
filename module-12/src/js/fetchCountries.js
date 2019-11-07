const api = 'https://restcountries.eu/rest/v2/name';

export default {
  fetchCountries(searchQuery) {
    const baseName = `/${searchQuery}`;
    return fetch(api + baseName).then(res => res.json());
  },
};