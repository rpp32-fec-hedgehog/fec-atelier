import React from 'react';

let SearchQuestion = (props) => {
  return <div data-testid="search-question">
    <input type="text" placeholder="Have a question? Search for answers..." className="qa-search-bar" onChange={props.searchQuestions}></input>
  </div>;
}

export default SearchQuestion;
