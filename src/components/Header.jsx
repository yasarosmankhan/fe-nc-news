import { Link } from 'react-router-dom';
import Topics from './Topics';

const Header = () => {
	return (
		<>
			<h1>NC News</h1>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Home
					</Link>

					<ul className="navbar-nav ml-auto">
						{' '}
						<li className="nav-item">
							<Link className="btn btn-outline-success" to="/login">
								Login
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Topics />
		</>
	);
};

export default Header;
