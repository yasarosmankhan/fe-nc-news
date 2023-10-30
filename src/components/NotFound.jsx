import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

	return (
		<div className="container text-center">
			<div className="row">
				<div className="col">
					<i className="fas fa-frown fa-5x text-danger"></i>
					<h1 className="text-danger">Not Found</h1>
					<p>The requested page was not found.</p>
					<p>
						Return to the <Link to="/">Home Page</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
