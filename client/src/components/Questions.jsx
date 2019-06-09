import React, { Component } from 'react';


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
    }
  }

  render() {
    let {questions} = this.props;
    console.log(questions)
    return (
      <div>
        {questions.map(question => 
          <h5>{question.question}</h5>  
        )}
        <h4>Questions</h4>
      </div>
    )
  }
}

export default Questions;