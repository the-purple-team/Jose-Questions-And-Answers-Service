import React, { Component } from "react";
import moment from "moment";
import Collapse from './Collapse.jsx';


class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [this.props.answers[0]],
      multipleAnswers: [this.props.answers.splice(0,1)],
      show: true
    };
  }

  displayAllAnswers() {
    // will set state to all answers in props
    // if state {singleAnswer} is true
      // set state {answers} to all answer this.props.answer
    // else 
      // set state {answers} to single answer
  }

  render() {
    // let { answers } = this.props;
    const {answers} = this.state;
    const nthAnswers = this.props.answers.length - 1;

    const answerForCollaps = [...this.props.answers];
    answerForCollaps.splice(0,1);

    // deteremine if the length of the answers Array is more than 1
    // if it's more than one,

    // if (answers.length > 1) {
    // sort answers by creadted and get most recent answer

    //   answers.sort((a, b) => {
    //     return new Date(b.createdAt) - new Date(a.createdAt);
    //   });
    // }

    return (
        <div className="a-fixed-left-grid a-spacing-base">
          <div
            className="a-fixed-left-grid-inner"
            style={{ paddingLeft: "100px" }}
          >
            <div
              className="a-fixed-left-grid-col a-col-left"
              style={{ width: "100px", marginLeft: "-100px", float: "left" , textAlign: 'left'}}
            >
              <span className="a-text-bold">Answer:</span>
            </div>
            {answers.map(answer => (
              <div key={answer._id}
                className="a-fixed-left-grid-col a-col-right"
                style={{ paddingLeft: "0%", float: "left", textAlign: 'left' }}
              >
                <span>{answer.answer}</span>
                <br />
                <span className="a-color-tertiary">
                  By {answer.user} on {moment(answer.createdAt).format("LL")}
                </span>
                <br />
                <div>
                  {/* <a href="#" id={answer._id} className={this.state.show ? 'hidden' : ''}>see more answers ({nthAnswers})</a> */}
                  <Collapse nthAnswers={nthAnswers} id={answer._id} answersExceptOne={answerForCollaps}/>
                </div>
              </div> 
            ))}
          </div>
        </div>
    );
  }
}

export default Answers;
