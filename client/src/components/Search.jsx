import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchResult: [],
      typing: false,
      typingTimeout: 0
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.findSearchQuery = this.findSearchQuery.bind(this);
  }

  // handle search input
  handleSearchChange(event) {
    let query = event.target.value;
    if (query === "") {
      // removes previous time
      if (this.state.typingTimeout) {
        clearTimeout(this.state.typingTimeout);
      }

      this.setState({
        search: query,
        typing: false,
        searchResult: [],
        typingTimeout: setTimeout(() => {
          this.props.searchQueryResults(
            this.state.searchResult,
            this.state.search
          );
        }, 1000)
      });
    } else {
      if (this.state.typingTimeout) {
        clearTimeout(this.state.typingTimeout);
      }

      this.setState({
        search: query,
        typing: false,
        typingTimeout: setTimeout(() => {
          this.findSearchQuery(query);
        }, 1000)
      });
    }
  }

  findSearchQuery(query) {

    const result = [...this.state.searchResult];
    const { questions } = this.props;
    // search any available question with query String
    for (let i = 0; i < questions.length; i++) {
      let question = questions[i].question.split(" ");
      
      if (
        question.includes(query) &&
        !result.includes(questions[i].question_id)
      ) {
        // insert the question into the result's array if it isn't already included
        result.push(questions[i]);
      }
    }
    this.setState({
      searchResult: result
    }, () => {
      this.props.searchQueryResults(this.state.searchResult, this.state.search);
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
            // onChange={e => this.handleChange(e)}
            onChange={e => this.handleSearchChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default Search;
