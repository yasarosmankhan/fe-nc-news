import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import userImg from '../assets/user-avatar.png';
import { getArticleCommentsById } from './api/newsApi';
import CommentForm from './CommentForm';
import { UserContext } from './UserContext';
import '../App.css';

const Comments = () => {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);
	const { username, setUsername } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		getArticleCommentsById(article_id).then((response) => {
			setComments(response.data.comments);
			setIsLoading(false);
		});
	}, []);

	const handleLoginClick = () => {
		navigate('/login', { state: { from: location } });
	};

	const addNewComment = (newComment) => {
		setComments([...comments, newComment]);
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
						<strong>
							{' '}
							<button onClick={handleLoginClick}>Login Here</button>
						</strong>
					</div>
				) : (
					<CommentForm onCommentPosted={addNewComment} />
				)}
			</div>

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
								<small className="text-muted">{comment.created_at}</small>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Comments;
