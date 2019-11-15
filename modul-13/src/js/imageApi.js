const baseUrl = 'https://pixabay.com/api/';

export default {
  key: '14290944-204e1581433a22283626a5c6b',

  searchName(name, page) {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=${this.key}`;

    return fetch(baseUrl + requestParams).then(res => res.json());
  },
};
