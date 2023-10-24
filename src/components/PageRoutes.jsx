import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SingleArticle from './SingleArticle';

const PageRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/articles/:article_id" element={<SingleArticle />} />
			</Routes>
		</>
	);
};

export default PageRoutes;
