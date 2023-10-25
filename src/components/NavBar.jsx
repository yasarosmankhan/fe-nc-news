import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const NavBar = () => {
	const { username, setUsername } = useContext(UserContext);
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Home
				</Link>
			</div>
			<ul className="navbar-nav ml-auto">
				{' '}
				{!username.length ? (
					<li className="nav-item">
						<Link className="btn btn-outline-success" to="/login">
							Login
						</Link>
					</li>
				) : (
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
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
