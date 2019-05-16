import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
		<div className="a-search a-span12">
			<i className="fa fa-search"></i>
			<input type="search" maxLength="150" autoComplete="off" placeholder="Have a question? Search for answers"
			name="askQuestionText" className="a-input-text a-span12"
			/>
		</div>
		)
	}
}

export default Search;