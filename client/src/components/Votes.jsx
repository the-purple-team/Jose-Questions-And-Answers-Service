import React, { Component } from "react";

class Votes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: ""
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="a-fixed-left-grid-col a-col-left">
        <ul className="vote voteaxios">
          <li key={"up"}>
            <form className="up" onSubmit={this.changeVote}>
              <input name="voteValue" value="1" type="hidden" />
              <input
                name="product_id"
                value={this.state.product._id}
                type="hidden"
              />
              <input
                name="question_id"
                value={questions.question_id}
                type="hidden"
              />
              <input type="submit" value="vote up" className="arrow-up" />
            </form>
          </li>
          <li className="vote-value" key={"votes"}>
            <span>{questions.votes}</span>
            <span>
              <br />
              votes
            </span>
          </li>
          <li key="up">
            <input name="voteValue" value="-1" type="hidden" />
            <input
              name="product_id"
              value={this.state.product._id}
              type="hidden"
            />
            <input
              name="question_id"
              value={questions.question_id}
              type="hidden"
            />
            <input type="submit" value="vote down" className="arrow-down" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Votes;
