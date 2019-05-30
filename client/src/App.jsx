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
          console.log(response.data.questions[0].votes)
          this.setState( {product: response.data} );
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
          this.setState({ [questions]: questions});
        });

  }

  render() {
    const {product} = this.state;
    
    // questios array
    const  data = this.state.product.questions; 
    return (
      <div>
        <hr className="a-divider-normal"/>
        <h2 className="a-color-base askWidgetHeader">Customers questions & answers</h2>
        <Search questions={data}/>
				<div className="askWidgetQuestions askLiveSearchHide">
          { JSON.stringify(product) === '{}' ? (
            <h3>Enter a product ID in url</h3>
          ) : (
            <div className="a-row a-spacing-small a-spacing-top-base" style={{textAlign: 'center'}}>
            {this.state.product.questions.map(questions => 
              <div>
                <div className="vote-count">
                  <ul className="vote voteaxios">
                    <li className="up-vote">
                      <form className="up" onSubmit={this.changeVote}>
                        <input name="voteValue" value="1" type="hidden"/>
                        <input name="product_id" value={this.state.product._id} type="hidden"/>
                        <input name="question_id" value={questions.question_id} type="hidden" />
                        <input type="submit" value="vote up" className="arrow-up"/>
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
                        <input name="voteValue" value="-1" type="hidden"/>
                        <input name="product_id" value={this.state.product._id} type="hidden"/>
                        <input name="question_id" value={questions.question_id} type="hidden" />
                        <input type="submit" value="vote down" className="arrow-down" />
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="">Question: {questions.question}</div>
                {questions.answers.map(answer =>
                  <div>
                  <div key={answer._id}><b>Answer:</b> {answer.answer}</div>
                  <div>By {answer.user} on {moment(answer.createdAt).format('LL')}</div>
                  </div>
                )}
              </div>
            )}
          </div>
            
            )}

          

				</div>


				<hr />
      </div>
    )
  }
}

ReactDOM.render(<Questions />, document.getElementById('App'));