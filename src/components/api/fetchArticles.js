function fetchApi(endpoint) {
	const baseUrl = 'https://nc-news-a2p9.onrender.com/api/';
	return fetch(baseUrl + endpoint).then((response) => response.json());
}

export default function fetchArticles() {
	return fetchApi('articles');
}
