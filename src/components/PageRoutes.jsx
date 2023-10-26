import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SingleArticle from './SingleArticle';
import LoginForm from './LoginForm';

const PageRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:topic" element={<HomePage />} />
				<Route path="/articles/:article_id" element={<SingleArticle />} />
				<Route path="/login" element={<LoginForm />} />
			</Routes>
		</>
	);
};

export default PageRoutes;
