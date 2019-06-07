import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchResult: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // updates the search value
  handleChange(e) {
    let query = e.target.value;
    console.log(query, `SEARCH VALUE`);
    this.setState({ search: query }, () => {
      let result = [...this.state.searchResult];
      console.log(result, `EMPTY RESULT?`);
      const { questions } = this.props;

      for (let i = 0; i < questions.length; i++) {
        let question = questions[i].question.split(" ");
        // console.log(question, `line 22`);
        // if the query is found in the question str
        if (
          question.includes(query) &&
          !result.includes(questions[i].question_id)
        ) {
          // insert the question into the result's array if it isn't already included
          console.log(questions[i], `question with query`);
          result.push(questions[i]);
        }
      }

      if (result.length) {
        this.setState({ searchResult: result });
        console.log(this.state, `result of search query`);
      }
    });
  }

  render() {
    return (
      <div className="a-section a-spacing-base askBtfSearchFormLabel askAutocomplete">
        <div className="a-search a-span12">
          <i className="fa fa-search a-icon a-icon-search" />
          <input
            type="search"
            maxLength="150"
            autoComplete="off"
            placeholder="Have a question? Search for answers"
            name="askQuestionText"
            className="a-input-text a-span12 askBtfSearchTextInput askBtfSearchPostTextInput askAutocompleteTextInput"
            value={this.state.search}
            onChange={e => this.handleChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default Search;
