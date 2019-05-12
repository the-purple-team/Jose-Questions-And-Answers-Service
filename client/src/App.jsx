import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import dummy from '../../dummydata.js';
import moment from 'moment';
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'What are you doing here?'
    }
  }

  componentDidMount() {
    axios.get(`/products/${1}`)
      .then(response => {
        console.log(response, `this is is going well`)
        this.setState( {db: response} );
      })
      .catch(err => {
        console.log(err)
      })
  }



  render() {
    return (
      <div>
        <hr />
        <h2>Customer questions & answers</h2>
				<div className="question">
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