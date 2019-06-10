import React, { Component } from "react";

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleAnswer: [],
      multipleAnswers: []
    };
  }


  render() {
    let { answers } = this.props;
    if (answers.length > 1) {
      // sort answers by creadted and get most recent answer
      answers.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }); 
      
    }
    return (
      <>
        {
          answers.map(answer => (
          <div key={answer._id} className="a-fixed-left-grid a-spacing-base">
            <div
              className="a-fixed-left-grid-inner"
              style={{ paddingLeft: "100px" }}
            >
              <div
                className="a-fixed-left-grid-col a-col-left"
                style={{ width: "100px", marginLeft: "-100px", float: "left" }}
              >
                <span className="a-text-bold">Answer:</span>
              </div>

              <div
                className="a-fixed-left-grid-col a-col-right"
                style={{ paddingLeft: "0%", float: "left" }}
              >
                <span>{answer.answer}</span>
                <br />
                <span>
                  By {answer.user} on {moment(answer.createdAt).format("LL")}
                </span>
              </div>
            </div>
          </div>
          )) 
        }
      </>
    );
  }
}

export default Answers;
