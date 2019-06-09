import React, { Component } from "react";
import Votes from "./Votes.jsx";
import Answers from "./Answers.jsx";

// props input is object with:
//   {
//     product: {
//       questions: [
//         {
//           question_id,
//           answers:[],
//           votes
//         }
//       ],
//       product_id
//     }
//   }

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props
    };
  }

  render() {
    let { questions } = this.props;
    return (
      <div className="a-section askTeaserQuestions">
        {questions.map(question => (
          <div key={question._id} className="a-fixed-left-grid a-spacing-base">
              <div
                className="a-fixed-left-grid-inner"
                style={{ paddingLeft: "65px" }}
              >
                <Votes votes={question.votes} />
                <Answers questions={question} />
              </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Questions;
