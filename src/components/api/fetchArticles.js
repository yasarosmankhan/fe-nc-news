function fetchArticles() {
	return fetch('https://nc-news-a2p9.onrender.com/api/articles').then((response) =>
		response.json()
	);
}

export default fetchArticles;
