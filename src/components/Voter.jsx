import React, { useState } from 'react';
import { updateArticleVote } from './api/newsApi';

const Voter = (props) => {
	const [vote, setVote] = useState(0);
	const [votedType, setVotedType] = useState(null);
	const [errMessage, setErrorMessage] = useState(null);

	const updateVotes = (voteType) => {
		const updatedVote = voteType === votedType ? 0 : voteType;

		setVote((prevVote) => prevVote + updatedVote);
		setVotedType(updatedVote === 0 ? null : voteType);

		updateArticleVote(props.votes + updatedVote, props.id).catch(() => {
			setErrorMessage('Error occurred while updating the vote!');
			setVotedType(null);
			setVote((prevVote) => prevVote - updatedVote);
		});
	};

	return (
		<>
			<strong>Votes:</strong> {props.votes + vote}
			<div className="mt-3">
				<button
					className="btn btn-sm btn-primary"
					onClick={() => updateVotes(1)}
					disabled={votedType === 1}
				>
					<i className="far fa-thumbs-up"></i> Like
				</button>{' '}
				<button
					className="btn btn-sm btn-danger"
					onClick={() => updateVotes(-1)}
					disabled={votedType === -1}
				>
					<i className="far fa-thumbs-down"></i> Dislike
				</button>
			</div>
			<small className="text-muted">{errMessage}</small>
		</>
	);
};

export default Voter;
