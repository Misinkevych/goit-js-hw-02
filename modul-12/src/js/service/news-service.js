'use strict';
const baseUrl = 'https://restcountries.eu/rest/v2/name/{name}';
export default {
  page: 1,
  query: '',
  fetchArticles() {
    const requestParams = `?q=${this.query}&page=${this.page}&pageSize=3`;

    return fetch(baseUrl + requestParams)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();

        return parsedResponse.articles;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
