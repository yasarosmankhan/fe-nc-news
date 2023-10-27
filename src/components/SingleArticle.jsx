import React, { useEffect, useState } from 'react';
import { getArticleById } from './api/newsApi';
import { useParams } from 'react-router-dom';
import '../App.css';
import Comments from './Comments';
import Voter from './Voter';

const SingleArticle = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id).then((response) => {
			setArticle(response.data.article);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div className="d-flex align-items-center justify-content-center">Loading ...</div>;
	}

	return (
		<>
			<div className="container mt-4">
				<article>
					<div className="row">
						<div className="col-md-8 mx-auto">
							<h1 className="display-4 text-center">{article.title}</h1>
							<footer>
								<p>
									<strong>By:</strong> {article.author}
								</p>
								<p>
									<strong>Topic:</strong> {article.topic}
								</p>
								<p>
									<strong>Created At:</strong> {article.created_at}
								</p>
							</footer>

							<img
								src={article.article_img_url}
								alt="Article Image"
								className="img-fluid mt-3"
							></img>
							<p className="text-justify">{article.body}</p>

							<footer>
								<Voter votes={article.votes} id={article_id} />
								<p></p>
								<strong>Comment Count:</strong> {article.comment_count}
								<Comments />
							</footer>
						</div>
					</div>
				</article>
			</div>
		</>
	);
};

export default SingleArticle;
