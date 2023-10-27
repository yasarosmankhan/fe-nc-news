import axios from 'axios';

const newsApi = axios.create({
	baseURL: 'https://nc-news-a2p9.onrender.com/api',
});

export function getTopics() {
	return newsApi.get('/topics');
}

export function getArticles(sort_by, order_by, selectedTopic) {
	return newsApi.get('/articles', {
		params: { sortby: sort_by, order: order_by, topic: selectedTopic },
	});
}

export function getArticleById(article_id) {
	return newsApi.get(`/articles/${article_id}`);
}

export function getUsers() {
	return newsApi.get('/users');
}

export function getArticleCommentsById(article_id) {
	return newsApi.get(`/articles/${article_id}/comments`);
}

export function updateArticleVote(vote, article_id) {
	return newsApi.patch(`/articles/${article_id}`, { inc_votes: vote });
}

export function postCommentOnArticleById(article_id, newComment) {
	return newsApi.post(`/articles/${article_id}/comments`, (article_id, newComment));
}
