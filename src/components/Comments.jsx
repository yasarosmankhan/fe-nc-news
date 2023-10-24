import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import userImg from '../assets/user-avatar.png';
import { getArticleCommentsById } from './api/newsApi';

const Comments = () => {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getArticleCommentsById(article_id).then((response) => {
			setComments(response.data.comments);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div className="d-flex align-items-center justify-content-center">Loading ...</div>;
	}

	return (
		<>
			<div className="container mt-5" >
				<div className="media" > 
					{comments.map((comment) => (
						<div key={comment.comment_id} className="media" id='comment-container'>
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
