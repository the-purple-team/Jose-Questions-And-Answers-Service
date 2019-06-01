import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			searchResult: []
		}
		this.handleChange = this.handleChange.bind(this);
	}

	// updates the search value
	handleChange(e) {
		let query = e.target.value;
		this.setState({ search: query });
		// ut
		console.log(this.state.search, `line 18`)
		const { questions } = this.props;
		let result = [...this.state.searchResult];
		for (let i = 0; i < questions.length; i++) {
			let question = questions[i].question.split(' ');
			// console.log(question, `line 22`);
			// if the query is found in the question str
			console.log(questions[i], `LINE 25 OF QUESTIONS[i]`)
			if (question.includes(query)) {
				// insert the question into the result's array
				result.push(questions[i]);
				console.log(questions, `line 26`)
				console.log(query, `LINE 28`)
			}

		}
		if (result.length) {
			this.setState({ searchResult: result });
			console.log(this.state, `result of search query`);
		}
	}

	// determine if the search query is found in the question string

	render() {
		return (
			<div className="a-section a-spacing-base askBtfSearchFormLabel askAutocomplete">
			<div className="a-search a-span12">
				<i className="fa fa-search a-icon a-icon-search"></i>
				<input type="search" maxLength="150" autoComplete="off" placeholder="Have a question? Search for answers"
					name="askQuestionText" className="a-input-text a-span12 askBtfSearchTextInput askBtfSearchPostTextInput askAutocompleteTextInput"
					value={this.state.search}
					onChange={(e) => this.handleChange(e)}
				/>
			</div>
			</div>
		)
	}
}

export default Search;