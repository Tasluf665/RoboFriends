import React from "react";

const SearchBox = (props) => {
   return (
      <div>
         <input
            className="pa3 ma2 ba b--green bg-lightest-blue"
            placeholder="Robo name"
            type="search"
            onChange={props.onChangeSearch}
         ></input>
      </div>
   );
};

export default SearchBox;
