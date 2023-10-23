import { Route, Routes, Link } from 'react-router-dom';
import CodingList from './articles/coding/CodingList';
import FootballList from './articles/football/FootballList';
import CookingList from './articles/cooking/CookingList';
import HomePage from '../HomePage';

const Topics = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/coding" element={<CodingList />} />
				<Route path="/football" element={<FootballList />} />
				<Route path="/cooking" element={<CookingList />} />
			</Routes>
		</>
	);
};

export default Topics;
