import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './UserContext';
import { postCommentOnArticleById } from './api/newsApi';

const CommentForm = ({ onCommentPosted }) => {
	const [comment, setComment] = useState('');
	const [errMessage, setErrMessage] = useState(null);
	const { article_id } = useParams();
	const { username, setUsername } = useContext(UserContext);

	const handleCommentChange = (e) => {
		setComment(e.target.value);
		setErrMessage(null);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (comment) {
			postCommentOnArticleById(article_id, { username: username, body: comment })
				.then((response) => {
					onCommentPosted(response.data.comment);
					setComment('');
				})
				.catch(() => {
					setErrMessage('Error posting your comment!');
				});
		} else {
			setErrMessage('Comments cannot be empty!');
		}
	};

	const handleClear = () => {
		setComment('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="comment">Comment:</label>
				<textarea
					className="form-control"
					id="comment"
					rows="4"
					value={comment}
					onChange={handleCommentChange}
				></textarea>
			</div>
			<p></p>
			<div className="form-group">
				<button type="submit" className="btn btn-primary mr-2">
					Submit
				</button>{' '}
				<button type="button" className="btn btn-secondary" onClick={handleClear}>
					Clear
				</button>
			</div>
			<strong className="error-message">{errMessage}</strong>
		</form>
	);
};

export default CommentForm;
