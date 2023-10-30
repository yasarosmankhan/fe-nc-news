import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SingleArticle from './SingleArticle';
import LoginForm from './LoginForm';
import NotFound from './NotFound';

const PageRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:topic" element={<HomePage />} />
				<Route path="/articles" element={<HomePage />} />
				<Route path="/articles/:article_id" element={<SingleArticle />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default PageRoutes;
