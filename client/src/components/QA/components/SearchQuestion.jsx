import React from 'react';

let SearchQuestion = (props) => {
  return <div className="qa-search-bar">
    <input type="text" onChange={props.searchHandler}></input>
  </div>;
}

export default SearchQuestion;
