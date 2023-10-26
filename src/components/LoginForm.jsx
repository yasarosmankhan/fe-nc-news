import React, { useEffect, useState, useContext } from 'react';
import { getUsers } from './api/newsApi';
import { UserContext } from './UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const LoginForm = () => {
	const [users, setUsers] = useState([]);
	const [errMessage, setErrMessage] = useState(null);
	const { username, setUsername } = useContext(UserContext);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		getUsers().then((response) => {
			setUsers(response.data.users);
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const selectedValue = e.target.LoginFormUserSelector.value;

		if (!selectedValue) {
			setErrMessage('No username is selected');
		} else {
			setUsername(selectedValue);
			setErrMessage('');
			if (location.state && location.state.from) {
				navigate(location.state.from.pathname);
			} else {
				navigate('/');
			}
		}
	};

	return (
		<main className="container">
			<section className="row justify-content-center">
				<article className="col-md-6">
					<form onSubmit={handleSubmit}>
						<fieldset>
							<legend>Login</legend>
							<div className="form-group">
								<label htmlFor="LoginFormUserSelector">Select Username: </label>{' '}
								<select className="custom-select" id="LoginFormUserSelector">
									<option value=""></option>
									{users.map((user, index) => (
										<option key={index} value={user.username}>
											{user.username}
										</option>
									))}
								</select>
							</div>
							<p> </p>
							<div className="form-group text-right">
								<button type="submit" className="btn btn-primary btn-block">
									Login
								</button>
								<p></p>
								<strong className="error-message">{errMessage}</strong>
							</div>
						</fieldset>
					</form>
				</article>
			</section>
		</main>
	);
};

export default LoginForm;
