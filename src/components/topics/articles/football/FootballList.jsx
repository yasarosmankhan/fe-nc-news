import { useEffect, useState } from 'react';
import fetchArticles from '../../../api/fetchArticles';
import FootballCard from './FootballCard';

const FootballList = () => {
	const [footballArticlesList, setFootballArticlesList] = useState([]);

	useEffect(() => {
		fetchArticles().then(({ articles: articles }) => {
			const articlesArr = [];
			articles.map((articles) => {
				if (articles.topic === 'football') {
					articlesArr.push(articles);
				}
			});
			setFootballArticlesList(articlesArr);
		});
	}, []);

	return (
		<>
			<h1>Football Articles</h1>
			<div className="row">
				<div className="col-8">
					<div className="row">
						{footballArticlesList.map((article) => {
							return (
								<div className="col" key={article.article_id}>
									<FootballCard
										img={article.article_img_url}
										title={article.title}
										author={article.author}
										comments_count={article.comment_count}
										votes={article.votes}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default FootballList;
