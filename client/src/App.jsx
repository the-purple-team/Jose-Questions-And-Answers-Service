import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import dummy from '../../dummydata.js';
import moment from 'moment';
import Search from './components/Search.jsx';
import './main.css';



class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
    this.changeVote = this.changeVote.bind(this);
  }

  componentDidMount() {
    let id = window.location.pathname
    if (id !== '/') {
      axios.get(`/products${id}`)
        .then(response => {
          console.log(response, `this is is going well`)
          this.setState({ product: response.data });
        })
        .catch(err => {
          console.log(err)
        });
    }
  }

  changeVote(event) {
    event.preventDefault()
    const product_id = event.target.elements.product_id.value;
    const question_id = event.target.elements.question_id.value;
    const voteValue = event.target.elements.voteValue.value;

    // makes POST request to update the question's vote count
    axios.post(`/ask/vote/question/${question_id}`,
      {
        vote: voteValue,
        product: product_id
      })
      .then((response) => {
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

  render() {
    const { product } = this.state;
    // questios array
    const data = this.state.product.questions;
    return (
      <div>
        <div id="ask-btf_feature_div">
          <div id="Ask"></div>
          <div id="ask_lazy_load_div">
            <div className="askInlineWidget">
              <hr className="a-divider-normal" />
              <h2 className="a-color-base askWidgetHeader">Customers questions & answers</h2>
              <div className="askWidgetQuestions askLiveSearchHide">
                <div className="a-row a-spacing-small a-spacing-top-base">
                  <div className="a-section askBtfSearchViewContent">
                    <Search questions={data} />
                  </div>
                </div>
                {JSON.stringify(product) === '{}' ? (
                  <h3>Enter a product ID in url</h3>
                ) : (
                    <div className="a-section a-spacing-none askBtfTopQuestionsContainer" style={{ textAlign: 'center' }}>
                      <span className="askTopQandA">
                        
                        <div className="a-section askTeaserQuestions">
                          {this.state.product.questions.length === 0 ? (
                            <div className="askQuestionExample">
                              <div className="askTypicalExample">Typical questions asked about products:</div>
                              <div className="askExampleQuestion">&nbsp;-&nbsp; Is the item durable?</div>
                              <div className="askExampleQuestion">&nbsp;-&nbsp; Is this item easy to use?</div>
                              <div className="askExampleQuestion">&nbsp;-&nbsp; What are the dimensions of this item?</div>
                            </div>
                          ) : this.state.product.questions.map(questions =>
                            <div className="a-fixed-left-grid a-spacing-base">
                              <div className="a-fixed-left-grid-inner" style={{ "paddingLeft": "65px" }}>
                                <div className="a-fixed-left-grid-col a-col-left" style={{ "width": "65px", "marginLeft": "-65px", "float": "left" }}>
                                  <ul className="vote voteaxios">
                                    <li>
                                      <form className="up" onSubmit={this.changeVote}>
                                        <input name="voteValue" value="1" type="hidden" />
                                        <input name="product_id" value={this.state.product._id} type="hidden" />
                                        <input name="question_id" value={questions.question_id} type="hidden" />
                                        <input type="submit" value="vote up" className="arrow-up" />
                                      </form>
                                    </li>
                                    <li className="vote-value">
                                      <span>{questions.votes}</span>
                                      <span>
                                        <br></br>
                                        votes
                                </span>
                                    </li>
                                    <li className="down-vote">
                                      <form className="down" onSubmit={this.changeVote}>
                                        <input name="voteValue" value="-1" type="hidden" />
                                        <input name="product_id" value={this.state.product._id} type="hidden" />
                                        <input name="question_id" value={questions.question_id} type="hidden" />
                                        <input type="submit" value="vote down" className="arrow-down" />
                                      </form>
                                    </li>
                                  </ul>
                                </div>
                                {/* end of votes div */}

                                <div className="a-fixed-left-grid-col a-col-right" style={{ "paddingLeft": "1%", "float": "left" }}>

                                  <div key={questions.question_id} className="a-fixed-left-grid a-spacing-small">
                                    <div className="a-fixed-left-grid-inner" style={{ "paddingLeft": "100px" }}>
                                      <div className="a-fixed-left-grid-col a-col-left" style={{ "width": "100px", "marginLeft": "-100px", "float": "left" }}>
                                        <span className="a-text-bold">Question:</span>
                                      </div>
                                      <div className="a-fixed-left-grid-col a-col-right" style={{ "paddingLeft": "0%", "float": "left" }}>

                                        <span className="a-declarative">{questions.question}</span>

                                      </div>
                                    </div>
                                  </div>
                                  {/* {questions.answers.map(answer =>
                                      <div className="a-fixed-left-grid a-spacing-base">
                                        <div key={answer._id}><b>Answer:</b> {answer.answer}</div>
                                        <div>By {answer.user} on {moment(answer.createdAt).format('LL')}</div>

                                      </div>
                                    )} */}
                                  {questions.answers.map(answer =>
                                    <div className="a-fixed-left-grid a-spacing-base">
                                      <div className="a-fixed-left-grid-inner" style={{ "paddingLeft": "100px" }}>


                                        <div key={answer._id} className="a-fixed-left-grid-col a-col-left" style={{ "width": "100px", "marginLeft": "-100px", "float": "left" }}>
                                          <span className="a-text-bold">Answer:</span>
                                        </div>
                                        <div className="a-fixed-left-grid-col a-col-right" style={{ "paddingLeft": "0%", "float": "left" }}>
                                          <span>{answer.answer}</span>
                                          <br />
                                          <span>By {answer.user} on {moment(answer.createdAt).format('LL')}</span>
                                        </div>
                                      </div>
                                      {/* <div>By {answer.user} on {moment(answer.createdAt).format('LL')}</div> */}

                                    </div>
                                  )}
                                </div>
                                {/* end of QnA div */}
                              </div>
                            </div>
                          )}

                        </div>
                      </span>

                    </div>

                  )}
              </div>
            </div>
          </div>
        </div>
        <hr className="a-spacing-large a-divider-normal" />
      </div>
    )
  }
}

ReactDOM.render(<Questions />, document.getElementById('App'));