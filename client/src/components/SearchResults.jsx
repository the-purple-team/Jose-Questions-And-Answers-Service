import React, { Component } from "react";
import moment from "moment";
function SearchResults(props) {
  if (!props.searchResult.length) {
    return (
      <>
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
        <div className="a-section a-spacing-base">
          <div className="a-section a-spacing-none">
            There were 0 results in Customer Questions &amp; Answers.
          </div>
        </div>
      </>
    );
  }
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
            <div
              key={result._id}
              className="a-section a-spacing-none"
              style={{ marginBottom: "20px" }}
            >
              <div>
                <span className="a-text-bold">Q:</span>
                <span className="a-text-bold" style={{ padding: "5px" }}>
                  {/* {result.question} */}
                  <AppendSpan question={result.question} query={props.query} />
                </span>
              </div>
              <div>
                <span className="a-text-bold">A:</span>
                <span style={{ padding: "5px" }}>
                  <AppendSpan
                    question={result.answers[0].answer}
                    query={props.query}
                  />
                </span>
              </div>
              <div>
                <span className="a-color-tertiary">
                  By {result.answers[0].user} on{" "}
                  {moment(result.answers[0].createdAt).format("LL")}
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

// append a span tag to the query string
function AppendSpan({ question, query }) {
  if (!query) {
    return question;
  }
  return (
    <span>
      {question.split(query).reduce((prev, current, i) => {
        if (!i) {
          return [current];
        }
        return prev.concat(
          <span style={{ backgroundColor: "#ffcc7f" }} key={query + current}>
            {query}
          </span>,
          current
        );
      }, [])}
    </span>
  );
}

export default SearchResults;
