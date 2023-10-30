import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { TopicContext } from './TopicContext';
import { getTopics } from './api/newsApi';
import NotFound from './NotFound';

const TopicsDropdown = () => {
	const [topics, setTopics] = useState([]);
	const [error, setError] = useState(null);
	const { selectedTopic, setSelectedTopic } = useContext(TopicContext);

	useEffect(() => {
		getTopics()
			.then((response) => {
				setTopics(response.data.topics);
			})
			.catch((error) => {
				setError(error);
			});
	}, [selectedTopic]);

	const handleTopicSelect = (slug) => {
		setSelectedTopic(slug);
	};

	if (error) {
		return <NotFound />;
	}

	return (
		<>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Topics
						</a>
						<ul className="dropdown-menu">
							{topics.map((topic) => (
								<li key={topic.slug}>
									<Link
										className="dropdown-item"
										to={`/${topic.slug}`}
										onClick={() => handleTopicSelect(topic.slug)}
									>
										{topic.slug}
									</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};

export default TopicsDropdown;
