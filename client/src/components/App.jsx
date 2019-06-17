import React from "react";
// import ReactDOM from 'react-dom';
import axios from "axios";
// import dummy from '../../dummydata.js';
import moment from "moment";
import Search from "./Search.jsx";
import "../main.css";

import Votes from "./Votes.jsx";
import Questions from "./Questions.jsx";
import Answers from "./Answers.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      searchRequest: false
    };
    this.changeVote = this.changeVote.bind(this);
  }

  componentDidMount() {
    // let id = window.location.pathname;
    // with proxy = .get(`http://localhost:3000/questions/product/${window.location.href.split('/')[4] || 1}`)
    // without proxy = .get(`/questions/product/${window.location.href.split('/')[4] || 1}`)
    let id = window.location.href.split('/')[4] || 1
    if (id !== "/") {
      axios
        .get(`http://ec2-18-220-91-195.us-east-2.compute.amazonaws.com:80/questions/product/${window.location.href.split('/')[4] || 1}`)
        .then(response => {
          // console.log(response, `this is is going well`)
          this.setState({ product: response.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  changeVote(event) {
    event.preventDefault();
    const product_id = event.target.elements.product_id.value;
    const question_id = event.target.elements.question_id.value;
    const voteValue = event.target.elements.voteValue.value;

    // makes POST request to update the question's vote count
    axios
      .post(`http://ec2-18-220-91-195.us-east-2.compute.amazonaws.com:80/ask/vote/question/${question_id}`, {
        vote: voteValue,
        product: product_id
      })
      .then(response => {
        console.log(response, `VOTES RESPONSE FROM SERVER`);
        const questionId = response.data.question_id;
        const voteValue = response.data.votes;
        const questions = [...this.state.product.questions];
        // find the question_id and update the vote value
        questions.forEach(question => {
          if (question.question_id === questionId) {
            question.votes = voteValue;
          }
        });
        this.setState({ [questions]: questions });
      });
  }

  searchQueryAndQuestions(searchResult) {
    // if this function is inbo
  }

  render() {
    const { product } = this.state;
    const data = this.state.product.questions;
    return (
      <>
        <div id="ask_lazy_load_div">
          <div className="askInlineWidget">
            <hr className="a-divider-normal" />
            <h2 className="a-color-base askWidgetHeader">
              Customers questions & answers
            </h2>
            <div className="askWidgetQuestions askLiveSearchHide">
              <div className="a-row a-spacing-small a-spacing-top-base">
                <div className="a-section askBtfSearchViewContent">
                  <Search questions={data} />
                </div>
              </div>
              {JSON.stringify(product) === "{}" ? (
                <h3 />
              ) : (
                <div
                  className="a-section a-spacing-none askBtfTopQuestionsContainer"
                  style={{ textAlign: "center" }}
                >
                  <div className="a-section askTeaserQuestions">
                    {this.state.product.questions.length === 0 ? (
                      <div className="askQuestionExample">
                        <div className="askTypicalExample">
                          Typical questions asked about products:
                        </div>
                        <div className="askExampleQuestion">
                          &nbsp;-&nbsp; Is the item durable?
                        </div>
                        <div className="askExampleQuestion">
                          &nbsp;-&nbsp; Is this item easy to use?
                        </div>
                        <div className="askExampleQuestion">
                          &nbsp;-&nbsp; What are the dimensions of this item?
                        </div>
                      </div>
                    ) : (
                      this.state.product.questions.map(question => (
                        <div
                          key={question._id}
                          className="a-fixed-left-grid a-spacing-base"
                        >
                          <div
                            className="a-fixed-left-grid-inner"
                            style={{ paddingLeft: "65px" }}
                          >
                            <div
                              className="a-fixed-left-grid-col a-col-left"
                              style={{
                                width: "65px",
                                marginLeft: "-65px",
                                float: "left"
                              }}
                            >
                              <Votes
                                changevotes={this.changeVote.bind(this)}
                                productId={this.state.product._id}
                                vote={question.votes}
                                questionId={question.question_id}
                              />
                            </div>

                            <div
                              className="a-fixed-left-grid-col a-col-right"
                              style={{ paddingLeft: "1%", float: "left" }}
                            >
                              <Questions question={question} />
                              <Answers answers={question.answers} questionId={question.question_id} />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="a-spacing-large a-divider-normal" />
      </>
    );
  }
}

// ReactDOM.render(<Questions />, document.getElementById('App'));
export default App;
