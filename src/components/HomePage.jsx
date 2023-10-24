import { useEffect, useState } from 'react';
import fetchArticles from './api/fetchArticles';

const HomePage = () => {
	const [articlesList, setArticlesList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchArticles().then(({ articles }) => {
			setArticlesList(articles);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return (
			<div className="d-flex align-items-center justify-content-center">
				<h1>Loading ...</h1>
			</div>
		);
	}

	return (
		<>
			<h1>Articles</h1>
			<div className="row">
				<div className="col-8">
					<div className="row">
						{articlesList.map((article) => {
							return (
								<div className="col" key={article.article_id}>
									<div className="card" style={{ width: '18rem' }}>
										<img
											className="card-img-top"
											src={article.article_img_url}
											alt={'topic image'}
										></img>
										<div className="card-body">
											<h5 className="card-title">{article.title}</h5>
										</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">
												Topic: {article.topic}
											</li>
											<li className="list-group-item">
												Author: {article.author}
											</li>
											<li className="list-group-item">
												votes: {article.votes}
											</li>
											<li className="list-group-item">
												comments: {article.comments_count}
											</li>
										</ul>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
