import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SortQueries = ({ getQueries, clearFilters }) => {
	const [selectedFilter, setSelectedFilter] = useState('');
	const [selectedOrder, setSelectedOrder] = useState('');
	const [userMessage, setUserMessage] = useState(null);

	const handleFilterChange = (e) => {
		setSelectedFilter(e.target.value);
		setUserMessage(null);
	};

	const handleOrderChange = (e) => {
		setSelectedOrder(e.target.value);
		setUserMessage(null);
	};

	const handleClear = (e) => {
		e.preventDefault();
		setSelectedFilter('');
		setSelectedOrder('');
		setUserMessage(null);
		clearFilters();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!selectedFilter.length || !selectedOrder.length) {
			setUserMessage('Filter cannot be empty!');
		} else {
			getQueries({ sortby: selectedFilter, order: selectedOrder });
			setUserMessage(null);
		}
	};

	return (
		<>
			<section className="row justify-content-end">
				<fieldset>
					<div className="form-group">
						<label htmlFor="filterSelector">
							<strong>Filter by: </strong>
						</label>
						<form>
							<select
								className="custom-select"
								id="filterSelector"
								value={selectedFilter}
								onChange={handleFilterChange}
							>
								<option value=""></option>
								<option value="created_at">Date</option>
								<option value="comment_count">Comment Count</option>
								<option value="votes">Votes</option>
							</select>{' '}
							<select
								className="custom-select"
								id="filter-order-selector"
								value={selectedOrder}
								onChange={handleOrderChange}
							>
								<option value=""></option>
								<option value="asc">Ascending</option>
								<option value="desc">Descending</option>
							</select>
							<p></p>
							<div className="form-group">
								<button type="button" onClick={handleSubmit}>
									<Link
										className="btn"
										to={`/articles?sortby=${selectedFilter}&order=${selectedOrder}`}
									>
										Apply filters
									</Link>
								</button>{' '}
								<button type="button" onClick={handleClear}>
									<Link className="btn" to={`/`}>
										Clear
									</Link>
								</button>
							</div>
							<p>{userMessage}</p>
						</form>
					</div>
				</fieldset>
			</section>
		</>
	);
};

export default SortQueries;
