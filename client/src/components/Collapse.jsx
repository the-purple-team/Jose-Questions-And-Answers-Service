import React from "react";
import moment from "moment";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideQuestions: true
    }
    this.refs = {};

    // build ref object with collapsible elements ids
    this.setRef = element => {
      this.refs[element.id] = element;
    };

    // toggle "show" CSS class using plain JS
    this.collapseRef = id => {

      // logic to hide the additional questions onclick
      if (!this.state.hideQuestions) {
        let div = document.getElementById(id).getElementsByTagName('div');
        // hide the collapse all button
        document.getElementById(id).getElementsByTagName('button')[0].style.display = 'none';
        // unhide the a tag
        document.getElementById(id).getElementsByTagName('a')[0].style.display = null;
        // hide the div that contains questions
        for (let d of div) {
          d.style.display = 'none';
        }
        
        this.setState({
          hideQuestions: true
        })
        
      } else {
        // logic to unhide the additional questions onclick
        let div = document.getElementById(id).getElementsByTagName('div');
        // console.log(id)
        // unhide the collaps all button
        document.getElementById(id).getElementsByTagName('button')[0].style.display = null;
        // hide the a tag that displays additional questions
        document.getElementById(id).getElementsByTagName('a')[0].style.display = 'none';
  
        // unhide the div that contains questions
        for (let d of div) {
          d.style.display = null;
        }
      }
      // if (this.refs) this.refs[id].classList.toggle("hide");
      this.setState({
        hideQuestions: false
      })
    };
  }

  componentWillMount() {
    this.refs = {}
}
  render() {
    // console.log(this.props.answersExceptOne, `questions exception one`)
    if (!this.props.answersExceptOne.length) {
      return (
        <>
        </>
      )
    }
    return (
      <div>
        <div
          className="collapse"
          // Use the `ref` callback to store a reference to the collapsible DOM element
          ref={this.setRef}
          id={this.props.id}
        >
          <a className="a-hyperlink-effect" href="#" onClick={() => this.collapseRef(this.props.id)}>see more answers({this.props.answersExceptOne.length})</a>
          
          {this.props.answersExceptOne.map(answer => (
            
            <div key={answer._id}className="a-section a-spacing-none a-spacing-top-small"
            style={{ display: 'none'}}>

            <span>{answer.answer}</span>
            <br/>
                <span className="a-color-tertiary">
                  By {answer.user} on {moment(answer.createdAt).format("LL")}
                </span>
                <br />
            </div>


          ))}
          <button className="a-button-input" type="button" style={{"display": "none"}} onClick={() => this.collapseRef(this.props.id)}>Collapse all answers</button>
        </div>
        
      </div>
    );
  }
}

export default Collapse;
