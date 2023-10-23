import { useEffect, useState } from 'react';
import fetchArticles from '../../../api/fetchArticles';
import CookingCard from './CookingCard';

const CookingList = () => {
	const [cookingArticlesList, setCookingArticlesList] = useState([]);

	useEffect(() => {
		fetchArticles().then(({ articles: articles }) => {
			const articlesArr = [];
			articles.map((articles) => {
				if (articles.topic === 'cooking') {
					articlesArr.push(articles);
				}
			});
			setCookingArticlesList(articlesArr);
		});
	}, []);

	return (
		<>
			<h1>Cooking Articles</h1>
			<div className="row">
				<div className="col-8">
					<div className="row">
						{cookingArticlesList.map((article) => {
							return (
								<div className="col" key={article.article_id}>
									<CookingCard
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

export default CookingList;
