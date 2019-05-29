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
  }

  componentDidMount() {
    let id = window.location.pathname
    if (id !== '/') {
      axios.get(`/products${id}`)
        .then(response => {
          console.log(response, `this is is going well`)
          this.setState( {product: response.data} );
        })
        .catch(err => {
          console.log(err)
        });
    }
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
                <div key={questions.question_id}>Votes:{questions.votes}</div>
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