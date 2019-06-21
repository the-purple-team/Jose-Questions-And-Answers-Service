import React, { Component } from "react";
import moment from 'moment';
function SearchResults(props) {
  if (!props.searchResult.length) {
    console.log(props.searchResult, `no length`)
    return (
      <h3>result was empty</h3>
    )
  }
  console.log(props.searchResult, `has length`)
  return (
    <div>
      <div>
        <span>Don't see what you were looking for?</span>
        <span>
          <button>Ask the Community</button>
        </span>
      </div>
      <br />
      <div>
        <span className="a-declarative a-search-result-header">All</span>
        <span className="a-declarative a-search-result-header">
          Product Information
        </span>
        <span className="a-declarative a-search-result-header">
          Customer Q&A's
        </span>
        <span className="a-declarative a-search-result-header">
          Customer Reviews
        </span>
        <hr className="a-divider-normal" />
      </div>

      <br />
      <div className="a-main-quesitons">
        <div className="a-section a-spacing-base">
          {props.searchResult.map(result => (
          <div key={result._id} className="a-section a-spacing-none" style={{"marginBottom" : "20px"}}>
            <div>
              <span className="a-text-bold">Q:</span>
              <span className="a-text-bold" style={{ padding: "5px" }}>
                {result.question}
              </span>
            </div>
            <div>
              <span className="a-text-bold">A:</span>
              <span style={{ padding: "5px" }}>
                {result.answers[0].answer}
                
              </span>
            </div>
            <div>
              <span className="a-color-tertiary">
              By {result.answers[0].user} on {moment(result.answers[0].createdAt).format("LL")}
              </span>
            </div>
          </div>

          ))}
          <br />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
