import React from 'react';

let SearchQuestion = (props) => {
  return <div className="qa-search-bar">
    <input type="text" onChange={props.searchQs}></input>
  </div>;
}

export default SearchQuestion;
