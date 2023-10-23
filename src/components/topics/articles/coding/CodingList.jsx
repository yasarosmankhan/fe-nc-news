import { useEffect, useState } from 'react';
import fetchArticles from '../../../api/fetchArticles';
import CodingCard from './CodingCard';

const CodingList = () => {
	const [codingArticlesList, setCodingArticlesList] = useState([]);

	useEffect(() => {
		fetchArticles().then(({ articles: articles }) => {
			const articlesArr = [];
			articles.map((articles) => {
				if (articles.topic === 'coding') {
					articlesArr.push(articles);
				}
			});
			setCodingArticlesList(articlesArr);
		});
	}, []);

	return (
		<>
			<h1>Coding Articles</h1>
			<div className="row">
				<div className="col-8">
					<div className="row">
						{codingArticlesList.map((article) => {
							return (
								<div className="col" key={article.article_id}>
									<CodingCard
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

export default CodingList;
