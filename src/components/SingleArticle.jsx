import React, { useEffect, useState } from 'react';
import { getArticleById } from './api/newsApi';
import { useParams } from 'react-router-dom';

const SingleArticle = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (article_id) {
			getArticleById(article_id).then((response) => {
				setArticle(response.data.article);
				setIsLoading(false);
			});
		}
	}, []);

	if (isLoading) {
		return <div className="d-flex align-items-center justify-content-center">Loading ...</div>;
	}

	return (
		<>
			<div class="container mt-4">
				<div class="row">
					<div class="col-md-8 mx-auto">
						<h1 class="display-4 text-center">{article.title}</h1>
						<div class="text-right">
							<p>
								<strong>By:</strong> {article.author}
							</p>
							<p>
								<strong>Topic:</strong> {article.topic}
							</p>
							<p>
								<strong>Created At:</strong> {article.created_at}
							</p>
						</div>

						<img
							src={article.article_img_url}
							alt="Article Image"
							class="img-fluid mt-3"
						></img>
						<br></br>
						<br></br>
						<p>{article.body}</p>

						<div class="text-right">
							<p>
								<strong>Votes:</strong> {article.votes}
							</p>
							<p>
								<strong>Comment Count:</strong> {article.comment_count}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleArticle;
