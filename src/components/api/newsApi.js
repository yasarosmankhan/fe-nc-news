import axios from 'axios';

const newsApi = axios.create({
	baseURL: 'https://nc-news-a2p9.onrender.com/api',
});

export function getArticles() {
	return newsApi.get('/articles');
}

export function getArticleById(article_id) {
	return newsApi.get(`/articles/${article_id}`);
}
