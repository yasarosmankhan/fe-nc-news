import React, { useState } from 'react';
import { updateArticleVote } from './api/newsApi';

const Voter = (props) => {
	const [vote, setVote] = useState(0);
	const [votedType, setVotedType] = useState(null);
	const [errMessage, setErrorMessage] = useState(null);

	const updateVotes = (voteType) => {
		if (votedType === voteType) {
			setVote(0);
			setVotedType(null);
		} else {
			const updatedVote = vote + voteType;
			setVote(updatedVote);
			setVotedType(voteType);
		}

		updateArticleVote(vote + voteType, props.id).catch(() => {
			setErrorMessage('Error occurred while updating the vote!');
			setVotedType(null);
			setVote(0);
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
