import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import userImg from '../assets/user-avatar.png';
import moment from 'moment';
import { getArticleCommentsById, deleteCommentById } from './api/newsApi';
import CommentForm from './CommentForm';
import { UserContext } from './UserContext';
import '../App.css';

const Comments = () => {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);
	const [userMessage, setUserMessage] = useState([]);
	const { username, setUsername } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		getArticleCommentsById(article_id).then((response) => {
			const sortedComments = response.data.comments.sort((a, b) => {
				return new Date(b.created_at) - new Date(a.created_at);
			});
			setComments(sortedComments);
			setIsLoading(false);
		});
	}, [comments]);

	const handleLoginClick = () => {
		navigate('/login', { state: { from: location } });
	};

	const addNewComment = (newComment) => {
		setComments([newComment, ...comments]);
	};

	const handleDeleteComment = (comment_id) => {
		deleteCommentById(comment_id).then(() => {
			setUserMessage('Comment deleted successfully!');
			setTimeout(() => {
				setUserMessage('');
			}, 3000);
		});
	};

	if (isLoading) {
		return <div className="d-flex align-items-center justify-content-center">Loading ...</div>;
	}

	return (
		<>
			<div>
				<p></p>
				{!username.length ? (
					<div>
						To comment on this post{' '}
						<button onClick={handleLoginClick}>Login Here</button>
					</div>
				) : (
					<CommentForm onCommentPosted={addNewComment} />
				)}
			</div>
			<p></p>
			<strong>{userMessage}</strong>
			<div className="container mt-5">
				<div className="media">
					{comments.map((comment) => (
						<div key={comment.comment_id} className="media" id="comment-container">
							<div className="d-flex align-items-center">
								<img
									src={userImg}
									className="mr-3"
									alt="User Avatar"
									id="user-img"
								/>
								<h5 className="mt-0">{comment.author}</h5>
							</div>
							<div className="media-body">
								<p>{comment.body}</p>
								<p>
									<strong>Votes:</strong> {comment.votes}
								</p>
								<small className="text-muted">
									{moment(comment.created_at).format('MMMM Do YYYY, h:mm:ss A')}
								</small>
							</div>
							{comment.author === username && (
								<button
									className="btn btn-danger"
									onClick={() => handleDeleteComment(comment.comment_id)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-trash"
										viewBox="0 0 16 16"
									>
										<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
										<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
									</svg>{' '}
									Delete
								</button>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Comments;
