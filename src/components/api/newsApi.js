import axios from 'axios';

const newsApi = axios.create({
	baseURL: 'https://nc-news-a2p9.onrender.com/api',
});

export default function getArticles() {
	return newsApi.get('/articles');
}
