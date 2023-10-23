import { Link } from 'react-router-dom';
const navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Home
				</Link>

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
								<li>
									<Link className="dropdown-item" to="/coding">
										Coding
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/football">
										Football
									</Link>
								</li>

								<li>
									<Link className="dropdown-item" to="/cooking">
										Cooking
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="btn btn-outline-success" to="/login">
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default navbar;
