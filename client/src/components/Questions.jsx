import React, { Component } from "react";
import Votes from "./Votes.jsx";
import Answers from "./Answers.jsx";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props
    };
  }

  render() {
    let { question } = this.props;
    return (
      <div key={question._id} className="a-fixed-left-grid a-spacing-small">
        <div
          className="a-fixed-left-grid-inner"
          style={{ paddingLeft: "100px" }}
        >
          <div
            className="a-fixed-left-grid-col a-col-left"
            style={{ width: "100px", marginLeft: "-100px", float: "left", textAlign:'left'}}
          >
            <span className="a-text-bold">Questions:</span>
          </div>
          <div
            className="a-fixed-left-grid-col a-col-right"
            style={{ paddingLeft: "0%", float: "left", textAlign:'left' }}
          >
            <a className="a-declarative a-hyperlink-effect" href="#">{question.question}</a>
            {/* <span className="a-declarative">{question.question}</span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
