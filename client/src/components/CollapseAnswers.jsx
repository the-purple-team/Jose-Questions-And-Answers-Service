import React from "react";
import moment from "moment";

class CollapseAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideQuestions: true
    };
    this.collapsAnswers = this.collapsAnswers.bind(this);
  }

  collapsAnswers(event) {
    event.preventDefault();
    if (this.state.hideQuestions) {
      this.setState({
        hideQuestions: false
      });
    } else {
      this.setState({
        hideQuestions: true
      });
    }
  }

  render() {
    if (this.state.hideQuestions) {
      if (this.props.answersExceptOne.length) {
        return (
          <div id={this.props.id}>
            <a
              className="a-hyperlink-effect"
              href="#"
              onClick={(e) => this.collapsAnswers(e)}
            >
              see more answers({this.props.answersExceptOne.length})
            </a>
          </div>
        );
      }
      return (
        <>
        </>
      )
    }

    return (
      <>
        {this.props.answersExceptOne.map(answer => (
          <div
            key={answer._id}
            className="a-section a-spacing-none a-spacing-top-small"
          >
            <span>{answer.answer}</span>
            <br />
            <span className="a-color-tertiary">
              By {answer.user} on {moment(answer.createdAt).format("LL")}
            </span>
            <br />
          </div>
        ))}
        <span className="a-button a-button-toggle">
          <span className="a-button-inner">
            <button
              className="a-button-input a-button"
              type="button"
              onClick={(e) => this.collapsAnswers(e)}
            >
              Collapse all answers
            </button>
          </span>
        </span>
      </>
    );
  }
}

export default CollapseAnswers;
