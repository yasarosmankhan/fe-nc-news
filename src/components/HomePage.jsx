import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from './api/newsApi';
import { Link } from 'react-router-dom';
import { TopicContext } from './TopicContext';
import SortQueries from './SortQueries';
import '../App.css';
import NotFound from './NotFound';

const HomePage = () => {
	const [articlesList, setArticlesList] = useState([]);
	const { selectedTopic, setSelectedTopic } = useContext(TopicContext);
	const [error, setError] = useState(null);
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	const [sortby, setSortby] = useState(null);
	const [order, setOrder] = useState(null);

	useEffect(() => {
		if (topic) {
			setSelectedTopic(topic);
		}
		getArticles(sortby, order, selectedTopic)
			.then((response) => {
				setArticlesList(response.data.articles);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error);
				setIsLoading(false);
			});
	}, [selectedTopic, topic, sortby, order]);

	if (error) {
		return <Navigate to="/" />;
	}

	if (isLoading) {
		return <div className="d-flex align-items-center justify-content-center">Loading ...</div>;
	}

	const getQueries = (queries) => {
		setSortby(queries.sortby);
		setOrder(queries.order);
	};
	const clearFilters = () => {
		setSortby(null);
		setOrder(null);
	};

	return (
		<>
			<div className="row">
				<div className="col-12 d-flex justify-content-end">
					<SortQueries getQueries={getQueries} clearFilters={clearFilters} />
				</div>
			</div>
			<main className="container mt-4">
				<h1 className="text-center">Articles</h1>
				<div className="row justify-content-center">
					<section className="col-12">
						<div className="row">
							{articlesList.map((article) => (
								<article className="col" key={article.article_id}>
									<div className="card">
										<img
											className="card-img-top"
											src={article.article_img_url}
											alt="Topic Image"
										/>
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
												Votes: {article.votes}
											</li>
											<li className="list-group-item">
												Comments: {article.comment_count}
											</li>
										</ul>
										<Link
											className="btn btn-primary stretched-link"
											to={`/articles/${article.article_id}`}
										>
											Read more ...
										</Link>
									</div>
								</article>
							))}
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

export default HomePage;
