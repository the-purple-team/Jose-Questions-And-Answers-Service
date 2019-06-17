class Collapse extends React.Component {
  constructor(props) {
    super(props)

    this.refs = {}

    // build ref object with collapsible elements ids
    this.setRef = (element) => {
      this.refs[element.id] = element
    }

    // toggle "show" CSS class using plain JS
    this.collapseRef = (id) => {
      if (this.refs) this.refs[id].classList.toggle('show')
    }        
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.collapseRef('content1')}
        >
          Collapse!
        </button>
        <div
          className="collapse"
          // Use the `ref` callback to store a reference to the collapsible DOM element
          ref={this.setRef}
          id="content1"
        >
          Collapsible content
        </div>
      </div>
    )
  }
}