import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { TopicContext } from './TopicContext';
import TopicsDropdown from './TopicDropdown';

const NavBar = () => {
	const { username, setUsername } = useContext(UserContext);
	const { setSelectedTopic } = useContext(TopicContext);

	const clearSelectedTopic = () => {
		setSelectedTopic(null);
	};

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand" onClick={clearSelectedTopic}>
					Home
				</Link>
				<TopicsDropdown />
			</div>
			<ul className="navbar-nav ml-auto">
				{' '}
				{username.length ? (
					<>
						<li className="nav-item">
							<strong className="btn btn-outline-success">{username}</strong>
						</li>
						<li className="nav-item">
							<button
								className="btn btn-outline-success"
								onClick={() => {
									setUsername('');
								}}
							>
								Logout
							</button>
						</li>
					</>
				) : (
					<li className="nav-item">
						<Link className="btn btn-outline-success" to="/login">
							Login
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
