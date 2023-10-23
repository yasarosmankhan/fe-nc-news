const FootballCard = (props) => {
	return (
		<>
			<div className="card" style={{ width: '18rem' }}>
				<img className="card-img-top" src={props.img} alt={'football topic image'}></img>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Author: {props.author}</li>
					<li className="list-group-item">votes: {props.votes}</li>
					<li className="list-group-item">comments: {props.comments_count}</li>
				</ul>
			</div>
		</>
	);
};

export default FootballCard;
