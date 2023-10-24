import { useEffect, useState } from 'react';
import { getArticles } from './api/newsApi';
import { Link } from 'react-router-dom';
import SingleArticle from './SingleArticle';

const HomePage = () => {
	const [articlesList, setArticlesList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticles().then((response) => {
			setArticlesList(response.data.articles);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div className="d-flex align-items-center justify-content-center">Loading ...</div>;
	}

	return (
		<>
			<h1 className="row justify-content-center">Articles</h1>
			<div className="row justify-content-center">
				<div className="col-10">
					<div className="row">
						{articlesList.map((article) => {
							return (
								<div className="col" key={article.article_id}>
									<div className="card" style={{ width: '25rem' }}>
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
												By: {article.author}
											</li>
											<li className="list-group-item">
												votes: {article.votes}
											</li>
											<li className="list-group-item">
												comments: {article.comments_count}
											</li>
										</ul>

										<Link
											className="btn btn-primary stretched-link"
											to={{
												pathname: `/articles/${article.article_id}`,
												state: { articleId: article.article_id },
											}}
										>
											Read
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<SingleArticle />
		</>
	);
};

export default HomePage;
