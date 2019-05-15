import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import dummy from '../../dummydata.js';
import moment from 'moment';
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'What are you doing here?',
      product: ''
    }
  }

  componentDidMount() {
    let id = window.location.pathname
    console.log(window.location.pathname, `CURRENT WINDOW PATH NAME`)
      axios.get(`/products${id}`)
        .then(response => {
          console.log(response, `this is is going well`)
          this.setState( {db: response} );
        })
        .catch(err => {
          console.log(err)
        });
  }

  onChange(e) {
    const id = e.target.value;
    this.setState({ product: id });
  }

  render() {
    return (
      <div>
        <hr className="a-divider-normal"/>
        <h2 className="a-color-base askWidgetHeader">Customer questions & answers</h2>
				<div className="askWidgetQuestions askLiveSearchHide">
          <div className="a-row a-spacing-small a-spacing-top-base">
            <input className="askSearchForm" 
            type="Text" 
            placeholder="Enter A Product ID" 
            value={this.state.product}
            
            />
          </div>
					{this.props.dummy.data.questions.map(questions => 
						<div>
							Question: {questions.question}
							{questions.answers.map(answer =>
								<div>
								<div>Answer: {answer.answer}</div>
								<div>By {answer.user} on {moment(answer.createdAt).format('LL')}</div>
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

ReactDOM.render(<Questions dummy={dummy}/>, document.getElementById('App'));